 const cbor = require('cbor');
 var Client = require('../models/client.model');
 const WebSocket = require('ws');

 const fs = require('fs');
 const protobufLib = require('protocol-buffers');
 var DateService = require('./date.service');

 loadState = async function () {
     let ws = new WebSocket('ws:localhost:8008/subscriptions');
    //  let ws = new WebSocket(`ws:${EnvConfig.VALIDATOR_REST_API_USER}:${EnvConfig.VALIDATOR_REST_API_PASS}@${EnvConfig.VALIDATOR_REST_API}/subscriptions`);
    //  let ws = new WebSocket(`ws:sawtooth:password@${EnvConfig.VALIDATOR_REST_API}/subscriptions`);
     console.log(`WebSocket has been connected`);
     ws.onopen = () => {
         ws.send(JSON.stringify({
             'action': 'subscribe',
             'address_prefixes': ['5f1db9', 'cd242e']
         }));
     };

     ws.onmessage = async function (mess) {

         const data = JSON.parse(mess.data);

         console.log(`${DateService.getDate()} | WebSocket Message: Состояние блокчейн изменилось | Получены новые изменения`);

         for (let i = 0; i < data.state_changes.length; i++) {
             console.log(`Запись состояния в базу данных  ${i+1} из ${data.state_changes.length}`);
             let service;
             if (data.state_changes[i].address.includes('cd242e')) {
                 service = 'kaztel';
             }

             if (data.state_changes[i].address.includes('5f1db9')) {
                 service = 'tfa';
             }

             const stateChange = data.state_changes[i];

             var messages = protobufLib(fs.readFileSync(`/home/vasiliy/workdirs/2fa-cabinet-git/models/proto/${service}.proto`));

             //  console.log(stateChange);
             var decodeDataBase64 = messages.User.decode(new Buffer(stateChange.value, 'base64'));

             decodeDataBase64.address = data.state_changes[i].address;

             //   console.log(decodeDataBase64);

             const query = {
                 Address: decodeDataBase64.address
             }

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
                     console.log('Client is existed', JSON.stringify(oldClient.Address))

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
             // if (addresses.indexOf(stateChange.address) !== -1) {
             //     // const _user = messagesService.User.decode(new Buffer(stateChange.value, 'base64'));
             // }
         }
     };

     //  ws.onclose = () => {
     //      ws.send(JSON.stringify({
     //          'action': 'unsubscribe'
     //      }));
     //  };
 }

 loadState();