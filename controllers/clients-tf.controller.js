const ENV = require('../config/environment');

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Client = require('../models/client.model');
var ClientTFService = require('../services/client-tf.service');
var StateToDB = require('../services/statedb.service');

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
const context = createContext('secp256k1');
const privateKey = context.newRandomPrivateKey();
const signer = new CryptoFactory(context).newSigner(privateKey);
const encode = obj => Buffer.from(JSON.stringify(obj, Object.keys(obj).sort()));
const decode = buf => JSON.parse(buf.toString());

const _hash = (x) => crypto.createHash('sha512').update(x).digest('hex').toLowerCase();

const fs = require('fs');
const protobufLib = require('protocol-buffers');


// Get All Clients from State 
exports.getAllClients = async function (req, res, next) {

    let userState = `${ENV.VALIDATOR_REST_API_HTTP}/state?limit=1000`;

    let headers = {
        'Content-Type': 'application/octet-stream'
    }

    try {
        var genOptions = await ClientTFService.generateOptions(userState, headers);
    } catch (e) {
        console.log(`Error in generate options: ${e}`);
    }
    

    // console.log(genOptions);
    let serviceNameHash = _hash(req.params.service).substring(0, 6);

    try {               
        var AllUsersData = await ClientTFService.getState(genOptions, 'all');
    } catch (e) {
        console.log(`Error in get state: ${e}`);
    }
    
    var path = require('path');
    var filePath = path.join(__dirname, `../models/proto/${req.params.service}.proto`);
    var messages = protobufLib(fs.readFileSync(filePath));

    let users = [];
    for (let i = 0; i < AllUsersData.length; i++) {
        if (AllUsersData[i].address.includes(serviceNameHash)) {
            // var decodeDataBase64 = cbor.decode(new Buffer(AllUsersData[i].data, 'base64'));
            var decodeDataBase64 = messages.User.decode(new Buffer(AllUsersData[i].data, 'base64'));
            decodeDataBase64.address = AllUsersData[i].address;
            users.push(decodeDataBase64);
        }
    }
    return res.json(users);
}

// Get One Client from State
exports.getClient = async function (req, res, next) {
    var token = getToken(req.headers);
    if (token) {
    let userStateAddress = `${ENV.VALIDATOR_REST_API_HTTP}/state/${req.params.address}`;
    var service; 
    if (req.params.address.includes('cd242e')) {
        service = 'kaztel';
    }
    if (req.params.address.includes('5f1db9')) {
        service = 'tfa';
    }
    let headers = {
        'Content-Type': 'application/octet-stream'
    }

    try {
        var optionsOne = await ClientTFService.generateOptions(userStateAddress, headers);
    } catch (e) {
        console.log(`Error in generate options for one client: ${e}`);
    }
    
    try {
        var userData = await ClientTFService.getState(optionsOne, 'one', service);
    } catch (e) {
        console.log(`Error in get state for one client: ${e}`);
    }    

    res.json(userData);}
    else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
      }
}


const getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };


// Check Client Number 
exports.checkClientNumber = async function (req, res, next) {

    try {
        var address = await ClientTFService.addressHashCreate(req.params.service, req.params.phoneNumber);
    } catch (e) {
        console.log(`Error in address hash create for check client number: ${e}`);
    }

    let userStateAddress = `${ENV.VALIDATOR_REST_API_HTTP}/state/${address}`;

    let headers = {
        'Content-Type': 'application/octet-stream'
    }

    try {
        var optionsOne = await ClientTFService.generateOptions(userStateAddress, headers);
    } catch (e) {
        console.log(`Error in generate options for check client number: ${e}`);
    }

    let getOneUserData = ClientTFService.getState(optionsOne, 'one', req.params.service)
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
        //   console.log(data);
        res.json(data);
    });
}

// Create Client in State
exports.createClient = async function (req, res, next) {

    //Create Payload
    try {
        var payload = await ClientTFService.payloadCreate(req.body, 0);
    } catch (e) {
        console.log(`Error in Create Payload for createClient: ${e}`);
    }

    // Create Address
    try {
        var address = await ClientTFService.addressHashCreate(req.body.service, req.body.PhoneNumber);
    } catch (e) {
        console.log(`Error in Create Address for createClient: ${e}`);
    }

    // Create Batch List of Bytes
    try {
        var batchListBytes = await ClientTFService.batchListBytesCreate(payload, req.body.service, address);
    } catch (e) {
        console.log(`Error in Create Batch List of Bytes for createClient: ${e}`);
    }

    // Try Create Client & Get Batch Status Link
    try {
        var batchStatusesLink = await ClientTFService.createClient(batchListBytes);
    } catch (e) {
        console.log(`Error in Create Client & Get Batch Status Link for createClient: ${e}`);
    }

    // Check Batch State Status & Response
    try {
        var checkBatchStatus = await ClientTFService.checkBatchStatus(res, batchStatusesLink, address);
    } catch (e) {
        console.log(`Error in Check Batch State Status & Response for createClient: ${e}`);
    }

    return res;
}

// Update Client in State
exports.updateClient = async function (req, res, next) {

    //Create Payload
    let payload = await ClientTFService.payloadCreate(req.body, 1);

    // Create Address
    let address = await ClientTFService.addressHashCreate(req.body.service, req.body.PhoneNumber);
    // let address = req.body.address;

    // Create Batch List of Bytes
    let batchListBytes = await ClientTFService.batchListBytesCreate(payload, req.body.service, address);

    // Try Create Client & Get Batch Status Link
    let batchStatusesLink = await ClientTFService.createClient(batchListBytes);

    // Check Batch State Status & Response
    let checkBatchStatus = await ClientTFService.checkBatchStatus(res, batchStatusesLink, address);

    return res;
}