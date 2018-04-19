// import { modelNames } from 'mongoose';

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
// const atob = require('atob');
// const btoa = require('btoa');
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

    let userState = 'http://localhost:8008/state?limit=1000';

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
        // let genOptions = await ClientTFService.generateOptions(userState, headers);        
        var AllUsersData = await ClientTFService.getState(genOptions, 'all');
    } catch (e) {
        console.log(`Error in get state: ${e}`);
    }
    // console.log(AllUsersData);
    // pass a proto file as a buffer/string or pass a parsed protobuf-schema object
    
    var messages = protobufLib(fs.readFileSync(`/home/vasiliy/workdirs/2fa-cabinet-git/models/proto/${req.params.service}.proto`));

    let users = [];
    for (let i = 0; i < AllUsersData.length; i++) {
        if (AllUsersData[i].address.includes(serviceNameHash)) {
            // var decodeDataBase64 = cbor.decode(new Buffer(AllUsersData[i].data, 'base64'));
            var decodeDataBase64 = messages.User.decode(new Buffer(AllUsersData[i].data, 'base64'));
            decodeDataBase64.address = AllUsersData[i].address;
            users.push(decodeDataBase64);
        }
    }
    // console.log(users);
    return res.json(users);
}

// Get One Client from State
exports.getClient = async function (req, res, next) {

    let userStateAddress = 'http://localhost:8008/state/' + req.params.address;
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

    let optionsOne = await ClientTFService.generateOptions(userStateAddress, headers);

    let userData = await ClientTFService.getState(optionsOne, 'one', service);

    res.json(userData);
}

// Check Client Number 
exports.checkClientNumber = async function (req, res, next) {

    let address = await ClientTFService.addressHashCreate(req.params.service, req.params.phoneNumber);

    let userStateAddress = 'http://localhost:8008/state/' + address;

    let headers = {
        'Content-Type': 'application/octet-stream'
    }

    let optionsOne = await ClientTFService.generateOptions(userStateAddress, headers);

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
    let payload = await ClientTFService.payloadCreate(req.body);

    // Create Address
    let address = await ClientTFService.addressHashCreate(req.body.service, req.body.PhoneNumber);

    // Create Batch List of Bytes
    let batchListBytes = await ClientTFService.batchListBytesCreate(payload, req.body.service, address);

    // Try Create Client & Get Batch Status Link
    let batchStatusesLink = await ClientTFService.createClient(batchListBytes);

    // Check Batch State Status & Response
    let checkBatchStatus = await ClientTFService.checkBatchStatus(res, batchStatusesLink, address);

    return res;
}

// // module.exports.getUsersData = getUsersData;


// //src/modules/api/controllsers/user.controller.ts
// // начинаем слушать изменения адресов
// //     let ws = new WebSocket('ws:localhost:8008/subscriptions');
// //     ws.onopen = () => {
// //         ws.send(JSON.stringify({
// //             'action': 'subscribe',
// //             'address_prefixes': addresses
// //         }));
// //     };
// //     ws.onmessage = mess => {
// //         const data = JSON.parse(mess.data);
// //         let responseSend = false;

// //         for (let i = 0; i < data.state_changes.length; i++) {
// //             const stateChange = data.state_changes[i];
// //             if (addresses.indexOf(stateChange.address) !== -1) {
// //                 const _user = messagesService.User.decode(new Buffer(stateChange.value, 'base64'));                
// //                 
// //             }
// //         }
// //     };
// //     ws.onclose = () => {
// //         ws.send(JSON.stringify({
// //             'action': 'unsubscribe'
// //         }));
// //     };
// //  }