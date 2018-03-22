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


let userAddress = '5f1db908188607cab913d77feaa875bde99337ea1b07f5babae2761e70ac8de1f8a5bb';
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

const getState = (options, method) => {
    // return new pending promise
    return new Promise((resolve, reject) => {
        request.get(options, (err, response) => {
            if (err) return console.log(err)
            var dataBase64 = JSON.parse(response.body).data
            console.log(dataBase64);
            if (method === 'all') resolve(dataBase64);
            var decodeDataBase64 = cbor.decode(new Buffer(dataBase64, 'base64'));
             console.log(decodeDataBase64);
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
    // console.log('getAllUsersData', data);
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
    return users;
});


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
// });

module.exports.getAllUsers = getAllUsers;
module.exports.generateOptions = generateOptions;
module.exports.getState = getState;
