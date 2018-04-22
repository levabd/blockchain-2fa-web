const ENV = require('../config/environment');
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
const request = require('request');
const encode = obj => Buffer.from(JSON.stringify(obj, Object.keys(obj).sort()));
const decode = buf => JSON.parse(buf.toString());

const crypto = require('crypto');
const _hash = (x) => crypto.createHash('sha512').update(x).digest('hex').toLowerCase();

const path = require('path');
const fs = require('fs');
const protobufLib = require('protocol-buffers');

exports.generateOptions = (_url, headers) => {
    let options = {
        url: _url,
        headers: headers
    }
    return options;
}

exports.getState = (options, method, service) => {
    return new Promise((resolve, reject) => {
        request.get(options, (err, response) => {

            if (err) return console.log(err)

            if (!(JSON.parse(response.body).error)) {
                var dataBase64 = JSON.parse(response.body).data
                if (method === 'all') resolve(dataBase64);
                if (method === 'one') {
                    var filePath = path.join(__dirname, `../models/proto/${service}.proto`);
                    var messages = protobufLib(fs.readFileSync(filePath));
                    var decodeDataBase64 = messages.User.decode(new Buffer(dataBase64, 'base64'));
                    if (decodeDataBase64.AdditionalData) {
                        decodeDataBase64.AdditionalData = JSON.parse(JSON.parse(decodeDataBase64.AdditionalData));
                    }
                    resolve(decodeDataBase64);
                }
            }

            if (JSON.parse(response.body).error) {
                resolve(JSON.parse(response.body));
            }
        })
    });
}

exports.addressHashCreate = (service, phoneNumber) => {
    return new Promise((resolve, reject) => {
        const serviceName = _hash(service).substring(0, 6);
        const phoneNumberPart = _hash(phoneNumber.toString()).slice(-64);
        let address = serviceName + phoneNumberPart;

        resolve(address);
    });
}

exports.payloadCreate = (body, action) => {

    if (body.service == 'tfa') {
        payload = {
            Action: action, // create | update | delete
            PhoneNumber: body.PhoneNumber,
            PayloadUser: {
                PhoneNumber: body.PhoneNumber,
                Uin: body.Uin,
                Name: body.Name,
                IsVerified: body.IsVerified,
                Email: body.Email,
                Sex: body.Sex,
                Birthdate: Date.parse(body.Birthdate)
            }
        }
    }
    if (body.AdditionalData) addData = JSON.stringify(body.AdditionalData);
    if (body.service == 'kaztel') {
        payload = {
            Action: action, // create | update | delete
            PhoneNumber: body.PhoneNumber,
            PayloadUser: {
                PhoneNumber: body.PhoneNumber,
                Uin: body.Uin,
                Name: body.Name,
                IsVerified: body.IsVerified,
                Email: body.Email,
                Sex: body.Sex,
                Birthdate: Date.parse(body.Birthdate),
                AdditionalData: JSON.stringify(addData)
            }
        }
    }
    return (payload);
}

exports.batchListBytesCreate = (payload, service, address) => {
    return new Promise((resolve, reject) => {
        console.log(`Into batchListBytesCreate | payload = ${JSON.stringify(payload)} | service = ${service} | address = ${address} |`);

        var filePath = path.join(__dirname, `../models/proto/${service}.proto`);
        const messages = protobufLib(fs.readFileSync(filePath));
        const payloadBytes = messages.SCPayload.encode(payload);

        const {
            createHash
        } = require('crypto');
        const {
            protobuf
        } = require('sawtooth-sdk');

        const transactionHeaderBytes = protobuf.TransactionHeader.encode({
            familyName: service,
            familyVersion: '0.1',
            inputs: [address],
            outputs: [address],
            signerPublicKey: signer.getPublicKey().asHex(),
            batcherPublicKey: signer.getPublicKey().asHex(),
            dependencies: [],
            payloadSha512: createHash('sha512').update(payloadBytes).digest('hex')
        }).finish();

        const signature0 = signer.sign(transactionHeaderBytes);

        const transaction = protobuf.Transaction.create({
            header: transactionHeaderBytes,
            headerSignature: signature0,
            payload: payloadBytes
        });

        const transactions = [transaction];

        const batchHeaderBytes = protobuf.BatchHeader.encode({
            signerPublicKey: signer.getPublicKey().asHex(),
            transactionIds: transactions.map((txn) => txn.headerSignature),
        }).finish();

        const signature1 = signer.sign(batchHeaderBytes);

        const batch = protobuf.Batch.create({
            header: batchHeaderBytes,
            headerSignature: signature1,
            transactions: transactions
        });

        const batchListBytes = protobuf.BatchList.encode({
            batches: [batch]
        }).finish();

        resolve(batchListBytes);
    });
}

// Check Batch Statuses
const checkBatchStatus = function (res, batchStatusesLink, address) {
    return new Promise((resolve, reject) => {
        request.get({
            url: batchStatusesLink,
            headers: {
                'Content-Type': 'application/octet-stream'
            }
        }, (err, response) => {
            if (err) return console.log(err)
            //Get Batch Status
            try {
                batchStatus = JSON.parse(response.body).data[0].status;
            } catch (e) {
                throw new Error("response.body status json parse contains error")
            }

            switch (batchStatus) {

                case 'COMMITTED':                  
                    res.json({
                        status: 201,
                        success: true,
                        address: address || false,
                        message: 'Пользователь успешно создан',
                    })
                    resolve();
                    break;

                case 'PENDING':
                    setTimeout(function () {
                        checkBatchStatus(res, batchStatusesLink, address);
                    }, 1000);
                    break;

                case 'INVALID':
                    batchErrorMessage = JSON.parse(response.body).data[0].invalid_transactions[0].message;

                    res.json({
                        status: 400,
                        success: false,
                        message: 'Ошибка при создании пользователя',
                        error: batchErrorMessage,
                    })
                    resolve();
                    break;

                default:
                    console.log(`Another ${batchStatus}`);
                    break;
            }
        });
    });
}

//Send Batch List of Bytes | Post Client
exports.createClient = function (batchListBytes) {
    return new Promise((resolve, reject) => {
        request.post({
            url: `${ENV.VALIDATOR_REST_API_HTTP}/batches`,
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
            resolve(batchStatusesLink);
        });
    });
}

module.exports.checkBatchStatus = checkBatchStatus;