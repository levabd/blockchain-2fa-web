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
const encode = obj => Buffer.from(JSON.stringify(obj, Object.keys(obj).sort()))
const decode = buf => JSON.parse(buf.toString())
const crypto = require('crypto')

const _hash = (x) => crypto.createHash('sha512').update(x).digest('hex').toLowerCase()
const FAMILY_NAME = 'tfa';
const FAMILY_NAMESPACE = _hash(FAMILY_NAME).substring(0, 6)
const FAMILY_VERSION = '0.1';


let userAddress = '5f1db908188607cab913d77feaa875bde99337ea1b07f5babae2761e70ac8de1f8a5bb';
let stateUrl = 'http://127.0.0.1:8008/state';
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

const getState = (options, method) => {
    // return new pending promise
    return new Promise((resolve, reject) => {
        request.get(options, (err, response) => {
            if (err) return console.log(err)
            if (!(JSON.parse(response.body).error)) {
                var dataBase64 = JSON.parse(response.body).data
                // console.log(dataBase64);
                if (method === 'all') resolve(dataBase64);
                var decodeDataBase64 = cbor.decode(new Buffer(dataBase64, 'base64'));
                //  console.log(decodeDataBase64);
                if (method === 'one') resolve(decodeDataBase64);
            }
            if (JSON.parse(response.body).error) {
                var errorData = JSON.parse(response.body)
               resolve(errorData);
            }
        })
    });
}

const addressHashCreate = (service, phoneNumber) => {
    const serviceName = _hash(service).substring(0, 6);
    const phoneNumberPart = _hash(phoneNumber.toString()).slice(-64);
    let address = serviceName + phoneNumberPart;
    return address;
}

const payloadCreate = (body) => {

    if (body.service == 'tfa') {
        payload = {
            Action: 'create', // create | update | delete
            PhoneNumber: body.PhoneNumber,
            User: {
                PhoneNumber: body.PhoneNumber,
                Uin: body.Uin,
                Name: body.Name,
                IsVerified: body.IsVerified,
                Email: body.Email,
                Sex: body.Sex,
                Birthdate: Date.parse(body.Birthdate),
                Logs: []
            }
        }
    }

    if (body.service == 'kaztel') {
        payload = {
            Action: 'create', // create | update | delete
            PhoneNumber: body.PhoneNumber,
            User: {
                PhoneNumber: body.PhoneNumber,
                Uin: body.Uin,
                Name: body.Name,
                IsVerified: body.IsVerified,
                Email: body.Email,
                Sex: body.Sex,
                Birthdate: Date.parse(body.BirthDate),
                Logs: [],
                Region: body.Region,
                PersonalAccount: body.PersonalAccount,
                Question: body.Question,
                Answer: body.Answer,
                AdditionalData: body.AdditionalData
            }
        }
    }
    return payload;
}

const batchListBytesCreate = (payload, service, address) => {
    const payloadBytes = cbor.encode(payload);

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
    return batchListBytes;
}

// Check Batch Statuses
const checkBatchStatus = (res, batchStatusesLink, address) => {
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
                    "address": address || false,
                    "success": true,
                    "message": 'Пользователь успешно создан'
                });
                console.log(`Batch status is ${batchStatus}`);
                break;

            case 'PENDING':
                console.log(`Batch status is ${batchStatus}`);

                setTimeout(function () {
                    checkBatchStatus(res, batchStatusesLink, address);
                }, 1000);
                break;

            case 'INVALID':
                //Get Invalid Transactions Error Message
                try {
                    batchErrorMessage = JSON.parse(response.body).data[0].invalid_transactions[0].message;
                    console.log(`Error = ${batchErrorMessage}`);
                } catch (e) {
                    throw new Error("response.body invalid transactions json parse contains error")
                }
                res.json({
                    "success": false,
                    "message": 'Ошибка при создании пользователя',
                    "error": batchErrorMessage
                });
                return console.log(`Batch status is ${batchStatus} for ADDRESS:(${address})`)
                break;

            default:
                console.log(`Another ${batchStatus}`);
                break;
        }
    });
}
// let genOptions = generateOptions(stateUrl, headers);

// let getAllUsersData = getState(genOptions, 'all')
//     .then((data) => {
//         return data;
//     })
//     .catch((err) => console.error(err));

// let getAllUsers = getAllUsersData.then((data) => {
//     let users = [];
//     // console.log('getAllUsersData', data);
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].address.includes('cd242e')) {
//             var decodeDataBase64 = cbor.decode(new Buffer(data[i].data, 'base64'));
//             users.push({
//                 address: data[i].address,
//                 user: decodeDataBase64
//             });
//         }
//     }
//     // console.log(users);
//     return users;
// });


// getAddresses = getdata.then((data) => {
//     var addresses = [];
//     Object.keys(data).forEach(function (key) {
//         if (data[key].address.includes('5f1db9'))
//             addresses.push(data[key].address);
//     });
//     console.log(addresses.length);
//     return addresses;
// });

// let getAllUsers = getAddresses.then((addresses) => {
//     const users = [];
//     let chain = Promise.resolve();
//     let results = [];

//     addresses.forEach(function (address) {
//         var opt = generateOptions(stateUrl + '/' + address);
//         chain = chain
//             .then(() => getState(opt, 'one'))
//             .then((result) => {
//                 users.push(result);
//             });
//     });
//     return chain.then(() => {
//         // console.log(users);
//         return (users);
//     });
// });

// getAllUsers.then(data => {
//     // let jsStr = JSON.stringify(data);
//     // console.log(jsStr);
// });

// console.log(getState(genOptions));
// request.get({
//     url: 'http://127.0.0.1:8008/transactions',
//     headers: {
//         'Content-Type': 'application/octet-stream'
//     }
// }, (err, response) => {
//     if (err) return console.log(err)

//     var dataBase64 = JSON.parse(response.body).data[0].payload

//     console.log(cbor.decode(new Buffer(dataBase64, 'base64')));
// // });

// module.exports.getAllUsers = getAllUsers;
// module.exports.generateOptions = generateOptions;
module.exports.getState = getState;
module.exports.generateOptions = generateOptions;
module.exports.payloadCreate = payloadCreate;
module.exports.batchListBytesCreate = batchListBytesCreate;
module.exports.checkBatchStatus = checkBatchStatus;
module.exports.addressHashCreate = addressHashCreate;