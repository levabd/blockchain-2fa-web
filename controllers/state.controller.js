var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Client = require('../models/client.model');
var ClientTFService = require('../services/client-tf.service');
var DateService = require('../services/date.service');

const request = require('request');
const crypto = require('crypto');
const cbor = require('cbor');
const _hash = (x) => crypto.createHash('sha512').update(x).digest('hex').toLowerCase();

const fs = require('fs');
const protobufLib = require('protocol-buffers');
require('../middleware/console-log2file');
console.file('/home/vasiliy/workdirs/2fa-cabinet-git/logs/file.log');



const getState = (options) => {
    return new Promise((resolve, reject) => {
        request.get(options, (err, response) => {
            if (err) return console.log(err)
            if (!(JSON.parse(response.body).error)) {
                var state = JSON.parse(response.body);
                // console.log(state);
                resolve(state);
            }
            if (JSON.parse(response.body).error) {
                var errorData = JSON.parse(response.body)
                resolve(errorData);
            }
        })
    });
}


const getPagingNextLink = (state) => {
    // console.log(state);
    var pagingNextLink = '';
    try {
        pagingNextLink = state.paging.next;
    } catch (e) {
        throw new Error("response.body pagingNextLink json parse contains error")
    }
    return pagingNextLink;
}

let stackUsers = async function (state, serviceNameHash) {
    let service;
    if (serviceNameHash == 'cd242e') {
        service = 'kaztel';
    }
    if (serviceNameHash == '5f1db9') {
        service = 'tfa';
    }

    console.log(`${DateService.getDate()} | Download State Message: Загружены данные из блокчейн | Поиск соответствия: state.Address.contains  (${service}| hash = ${serviceNameHash})`);
    var messages = protobufLib(fs.readFileSync(`/home/vasiliy/workdirs/2fa-cabinet-git/models/proto/${service}.proto`));

    for (let i = 0; i < state.data.length; i++) {
        if (state.data[i].address.includes(serviceNameHash)) {
            console.log(`Запись состояния в базу данных  ${i} из ${state.data.length}`);
            var decodeDataBase64 = messages.User.decode(new Buffer(state.data[i].data, 'base64'));
            decodeDataBase64.address = state.data[i].address;
            const query = {
                Address: decodeDataBase64.address
            }
            try {
                await Client.findOne(query, (err, oldClient) => {
                    if (err) throw err;
                    if (!oldClient) {
                        let newClient = new Client({
                            Address: decodeDataBase64.address,
                            PhoneNumber: decodeDataBase64.PhoneNumber,
                            Uin: decodeDataBase64.Uin,
                            Name: decodeDataBase64.Name,
                            IsVerified: decodeDataBase64.IsVerified,
                            Email: decodeDataBase64.Email,
                            Sex: decodeDataBase64.Sex,
                            Birthdate: decodeDataBase64.Birthdate,
                            PushToken: decodeDataBase64.PushToken,
                            Logs: decodeDataBase64.Logs,
                            AdditionalData: decodeDataBase64.AdditionalData
                        });
                        newClient.save(function (err, user) {
                            if (err) {
                               console.log(`${DateService.getDate()} | Client ${decodeDataBase64.PhoneNumber}  hasn't been created in database | Error: ${err}`);
                            } else {
                                console.log(`${DateService.getDate()} | Client ${decodeDataBase64.PhoneNumber}  has been created in database`);
                            }
                        });
                    }
                    if (oldClient) {
                        console.log('Client is existed', JSON.stringify(oldClient.Address));

                        //Edit the Client Object
                        oldClient.Address = decodeDataBase64.address;
                        oldClient.PhoneNumber = decodeDataBase64.PhoneNumber;
                        oldClient.Uin = decodeDataBase64.Uin;
                        oldClient.Name = decodeDataBase64.Name;
                        oldClient.IsVerified = decodeDataBase64.IsVerified;
                        oldClient.Email = decodeDataBase64.Email;
                        oldClient.Sex = decodeDataBase64.Sex;
                        oldClient.Birthdate = decodeDataBase64.Birthdate;
                        oldClient.Logs = decodeDataBase64.Logs;
                        oldClient.PushToken = decodeDataBase64.PushToken;
                        AdditionalData = decodeDataBase64.AdditionalData;

                        oldClient.save(function (err, user) {
                            if (err) {
                               console.log(`${DateService.getDate()} | Client ${decodeDataBase64.PhoneNumber}  hasn't been updated in database | Error: ${err}`);
                            } else {
                                console.log(`${DateService.getDate()} | Client ${decodeDataBase64.PhoneNumber}  has been updated in database`);
                            }
                        });
                    }
                });
            } catch (e) {
                console.log(`${DateService.getDate()} | Ошибка записи состояния: ${e}`);
            }
        }
    }
}

var statePageNumber = 0;

let getAllUsersData = async function (genOptions, serviceNameHash, headers) {

    let state = await getState(genOptions);

    let pagingNextLink = getPagingNextLink(state);

    await stackUsers(state, serviceNameHash);

    if (pagingNextLink != null && pagingNextLink != undefined && pagingNextLink != '' && pagingNextLink.includes('http')) {
        console.log(` ${pagingNextLink}`);
        let genOptions = ClientTFService.generateOptions(pagingNextLink, headers);
        console.log(`Записана ${++statePageNumber}-я страница состояния блокчейн`);
        await getAllUsersData(genOptions, serviceNameHash, headers);
    }
    if (pagingNextLink == undefined) {
        let message = `${DateService.getDate()} | Finish! Downloaded all pages from state to database `
        console.log(message);
    }
}

exports.updateUsersData = async function (req, res, next) {
    var serviceName = req.query.service ? req.query.service : 'tfa';
    var serviceNameHash = _hash(serviceName).substring(0, 6);

    var limit = req.query.limit ? req.query.limit : 100;

    let userState = `http://localhost:8008/state?limit=${limit}`;
    let headers = {
        'Content-Type': 'application/octet-stream'
    }

    let genOptions = ClientTFService.generateOptions(userState, headers);

    let stateResult = await getAllUsersData(genOptions, serviceNameHash, headers);
    console.file(); // go back to writing to stdout
    return res.status(200).json({
        status: 200,
        result: `Finish! Downloaded all pages from state to database`,
        message: "Succesfully Clients Recieved"
    });
}

exports.getLog = async function (req, res, next) {
    var path = require('path');
    // res.setHeader("content-type", "text/plain");
    // return res.sendFile(path.resolve('logs/file.log'));
    // fs.createReadStream(path.resolve('logs/file.log')).pipe(res);
    var fileData = await fs.readFileSync(path.resolve('logs/file.log'), 'utf8');
    // var fileData = [];
    // fs.createReadStream(path.resolve('logs/file.log')).pipe(fileData);
    
    return res.status(200).json({
        status: 200,
        data: fileData,
        message: "Succesfully Upload Logs"
    });
    // fs.readFile(path.resolve('logs/file.log'), function (err, data) {
    //     if (err) throw err;
    // });
}

// function(req, res, next) {
//     if(req.url==="somethingorAnother") {
//       res.setHeader("content-type", "some/type");
//       fs.createReadStream("./toSomeFile").pipe(res);
//     } else {
//       next(); // not our concern, pass along to next middleware function
//     }
//   }

// createClient = async function (client) {
//     // Creating a new Mongoose Object by using the new keyword
//     var newClient = new Client({
//         PhoneNumber: client.PhoneNumber,
//         Uin: client.Uin,
//         Name: client.Name,
//         IsVerified: client.IsVerified,
//         Email: client.Email,
//         Sex: client.Sex,
//         BirthDate: client.BirthDate,
//         Logs: client.Logs,
//         address: client.address
//     })

//     try {

//         // Saving the Client 
//         var savedClient = await newClient.save();

//         return savedClient;
//     } catch (e) {

//         // return a Error message describing the reason     
//         throw Error("Error while Creating Client")
//     }
// }

// let client = {
//     PhoneNumber: '77281482201',
//     Uin: 225468416843,
//     Name: 'James Bond 0',
//     IsVerified: false,
//     Email: 'jb@ee.ru',
//     Sex: 'male',
//     Birthdate: 2012554112,
//     Logs: [],
//     address: '5f1db9350ace3e0da347015ba4e274bd50a6d62fe93c46e722a8d7cee43155451680f3'
// }

// createClient(client);






// /* SAVE client */
// router.post('/', function (req, res, next) {
//     Client.create(req.body, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });


// function checkClient(user, cb) {
//     Client.find({
//         PhoneNumber: user.PhoneNumber
//     }, function (docs) {
//         if (docs.length) {
//             cb('false');
//         } else {
//             cb('true');
//         }
//     });
// }

// function createClient(_client) {
//     return new Promise(function (resolve, reject) {
//         var client = new Client();
//         client.PhoneNumber = _client.PhoneNumber;
//         client.Uin = _client.Uin;
//         client.Name = _client.Name;
//         client.IsVerified = _client.IsVerified;
//         client.Email = _client.Email;
//         client.Sex = _client.Sex;
//         client.BirthDate = _client.BirthDate;
//         client.Logs = _client.Logs;
//         client.address = _client.address;
//         resolve(client);
//     })
// }

// function checkClient(_client, match) {
//     return new Promise(function (resolve, reject) {
//         Client.find(match, function (err, docs) {
//             if (!docs.length) {
//                 resolve(_client);
//             } else {
//                 // console.log(`User with ${self.PhoneNumber} already exists`);
//                 reject(new Error(`User with phone number ${_client.PhoneNumber} already exists`));
//             }
//         });
//     });
// }