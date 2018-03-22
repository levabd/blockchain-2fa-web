var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Client = require('../models/client.js');
const {
  createContext,
  CryptoFactory
} = require('sawtooth-sdk/signing');
const {
  InternalError
} = require('sawtooth-sdk/processor/exceptions');

const cbor = require('cbor');
const protobuf = require('protobufjs');
const atob = require('atob');
const btoa = require('btoa');
const context = createContext('secp256k1');
const privateKey = context.newRandomPrivateKey();
const signer = new CryptoFactory(context).newSigner(privateKey);
const request = require('request');
const encode = obj => Buffer.from(JSON.stringify(obj, Object.keys(obj).sort()))
const decode = buf => JSON.parse(buf.toString())


let stateUrl = 'http://sawtooth-rest-api-public:8008/state';

let headers = {
  'Content-Type': 'application/octet-stream'
}

const generateOptions = (_url, headers) => {
  let options = {
    url: _url,
    headers: headers
  }
  return options;
}

/* GET all clients */
router.get('/', function (req, res, next) {
  // Client.find(function (err, clients) {
  //   if (err) return next(err);
  //   res.json(clients);
  // });
  // getAllUsers.then((data) => {
  //   // data.user.Birthdate = timeConverter(data.user.Birthdate);
  //   console.log(data);
  //   res.json(data);
  // });

  const getState = (options, method) => {
    // return new pending promise
    return new Promise((resolve, reject) => {
      request.get(options, (err, response) => {
        if (err) return console.log(err)
        var dataBase64 = JSON.parse(response.body).data
        // console.log(dataBase64);
        if (method === 'all') resolve(dataBase64);
        var decodeDataBase64 = cbor.decode(new Buffer(dataBase64, 'base64'));
        // console.log(decodeDataBase64);
        if (method === 'one') resolve(decodeDataBase64);
      })
    });
  }
  let genOptions = generateOptions(stateUrl, headers);

  let getAllUsersData = getState(genOptions, 'all')
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));

  let getAllUsers = getAllUsersData.then((data) => {
    let users = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].address.includes('cd242e')) {
        var decodeDataBase64 = cbor.decode(new Buffer(data[i].data, 'base64'));
        users.push({
          address: data[i].address,
          user: decodeDataBase64
        });
      }
    }
    // console.log(users);
    res.json(users);
  });
});

function timeConverter(UNIX_timestamp){
  var date = new Date(UNIX_timestamp*1000);
var iso = date.toISOString();
return iso;
}


/* GET single client BY ID */
router.get('/:address', function (req, res, next) {

  let optionsOne = generateOptions('http://sawtooth-rest-api-public:8008/state/' + req.params.address, {
    'Content-Type': 'application/octet-stream'
  });
  const getState = (options, method) => {
    // return new pending promise
    return new Promise((resolve, reject) => {
      request.get(options, (err, response) => {
        if (err) return console.log(err)
        var dataBase64 = JSON.parse(response.body).data
        // console.log(dataBase64);
        if (method === 'all') resolve(dataBase64);
        var decodeDataBase64 = cbor.decode(new Buffer(dataBase64, 'base64'));
        // console.log(decodeDataBase64);
        if (method === 'one') resolve(decodeDataBase64);
      })
    });
  }
  let getOneUserData = getState(optionsOne, 'one')
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
    getOneUserData.then((data) => {

      // data.Birthdate = timeConverter(data.Birthdate);
      // console.log(data);
      res.json(data);
    });
  // Client.findById(req.params.id, function (err, post) {
  //   if (err) return next(err);
  //   res.json(post);
  // });

});

// /* SAVE client */
// router.post('/', function (req, res, next) {
//   Client.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* UPDATE client */
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
