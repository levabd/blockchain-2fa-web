var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Client = require('../models/client.model');
var clientCtrl = require('../controllers/clients.controller');
var stateCtrl = require('../controllers/clients-tf.controller');
const request = require('request');
const crypto = require('crypto');


const {
  createContext,
  CryptoFactory
} = require('sawtooth-sdk/signing');
const {
  InternalError
} = require('sawtooth-sdk/processor/exceptions');

const cbor = require('cbor');
const protobuf = require('protobufjs');
// const atob = require('atob');
// const btoa = require('btoa');
const context = createContext('secp256k1');
const privateKey = context.newRandomPrivateKey();
const signer = new CryptoFactory(context).newSigner(privateKey);
const encode = obj => Buffer.from(JSON.stringify(obj, Object.keys(obj).sort()))
const decode = buf => JSON.parse(buf.toString())

const _hash = (x) => crypto.createHash('sha512').update(x).digest('hex').toLowerCase()
const FAMILY_NAME = 'tfa';
const FAMILY_NAMESPACE = _hash(FAMILY_NAME).substring(0, 6)
const FAMILY_VERSION = '0.1';


let stateUrl = 'http://127.0.0.1:8008/state?limit=1000';

let headers = {
  'Content-Type': 'application/octet-stream'
}
//*************************** */
const generateOptions = (_url, headers) => {
  let options = {
    url: _url,
    headers: headers
  }
  return options;
}
//************************ */
/* GET all clients */
router.get('/all/:service', function (req, res, next) {

  let _getState = clientCtrl.getState;

  let genOptions = clientCtrl.generateOptions(stateUrl, headers);

  let serviceName = _hash(req.params.service).substring(0, 6);

  let getAllUsersData = _getState(genOptions, 'all')
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
 
  let getAllUsers = getAllUsersData.then((data) => {
    let users = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].address.includes(serviceName)) {
        var decodeDataBase64 = cbor.decode(new Buffer(data[i].data, 'base64'));
        decodeDataBase64.address = data[i].address;
        users.push(decodeDataBase64);
      }
    }
    // console.log(users);
    res.json(users);
  });
});

function timeConverter(UNIX_timestamp) {
  var date = new Date(UNIX_timestamp * 1000);
  var iso = date.toISOString();
  return iso;
}

//************************ */
/* GET single client BY ID */
router.get('/:address', function (req, res, next) {

  let userStateAddress = 'http://localhost:8008/state/' + req.params.address;

  let optionsOne = clientCtrl.generateOptions(userStateAddress, headers);

  let _getState = clientCtrl.getState;

  let getOneUserData = _getState(optionsOne, 'one')
    .then((data) => {
      return data;
    })
    .catch((err) => {console.error(err);});

  getOneUserData.then((data) => {
    // console.log(data);
    res.json(data);
  });
});

/* CHECK client number */
router.get('/check/:service/:phoneNumber', function (req, res, next) {

  let _addressHashCreate = clientCtrl.addressHashCreate;
  const address = _addressHashCreate(req.params.service, req.params.phoneNumber);

  let userStateAddress = 'http://localhost:8008/state/' + address;

  let optionsOne = clientCtrl.generateOptions(userStateAddress, headers);

  let _getState = clientCtrl.getState;

  let getOneUserData = _getState(optionsOne, 'one')
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
      return data;
    });

  getOneUserData.then((data) => {
    // console.log(data);
    data.address = address;
    console.log(data);
    res.json(data);
  });
});

/* SAVE client */
router.post('/', function (req, res, next) {
  //Create Payload
  let _payloadCreate = clientCtrl.payloadCreate;
  let payload = _payloadCreate(req.body);

  // Create Address
  let _addressHashCreate = clientCtrl.addressHashCreate;
  let address = _addressHashCreate(req.body.service, payload.User.PhoneNumber);
  console.log(address);

  // Create Batch List of Bytes
  let _batchListBytesCreate = clientCtrl.batchListBytesCreate;
  batchListBytes = _batchListBytesCreate(payload, req.body.service, address);

  //Send Batch List of Bytes | Post Client
  request.post({
    url: 'http://127.0.0.1:8008/batches',
    body: batchListBytes,
    headers: {
      'Content-Type': 'application/octet-stream'
    }
  }, (err, response) => {
    if (err) return console.log(err)

    //Get Batch State Link
    try {
      batchStatusesLink = JSON.parse(response.body).link;
    } catch (e) {
      throw new Error("response.body link json parse contains error")
    }

    // Check Batch State Status & Response
    let _checkBatchStatus = clientCtrl.checkBatchStatus;
    _checkBatchStatus(res, batchStatusesLink, address);
  });
});

/* UPDATE client */
// router.put('/:id', function (req, res, next) {
//   Client.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* DELETE client */
// router.delete('/:id', function (req, res, next) {
//   Client.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;