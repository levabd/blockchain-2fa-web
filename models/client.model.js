var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');


var ClientSchema = new mongoose.Schema({
  
  Address: {
    type: String,
    unique: true,
  },

  PhoneNumber: {
    type: String,
  },

  Uin: {
    type: Number,
  },

  Name: {
    type: String,
  },

  IsVerified: {
    type: Boolean,
    default: false,
  },

  Email: {
    type: String,
    lowercase: true, //.toLowerCase()
  },

  Sex: {
    type: String,
  },

  Birthdate: {
    type: Number,
  },

  Logs: [],

  PushToken: {
    type: String,
  },

  AdditionalData: [],

  updated_date: {
    type: Date,
    default: Date.now
  },
});

ClientSchema.plugin(mongoosePaginate);
const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;

// export class ClientUser {
//   Name: string;
//   PhoneNumber: string;
//   Uin: number;
//   Sex: string;
//   Email: string;
//   Birthdate: number;
//   PushToken: string;
//   Region: string;
//   PersonalAccount: number;
//   Question: string;
//   Answer: string;
//   IsVerified: boolean;
//   AdditionalData: any;
// }

// [{
//   "PhoneNumber": "77055451025",
//   "Uin": 3754290610,
//   "Name": "Анатолий Исаев",
//   "IsVerified": false,
//   "Email": "doamin_@mail.ru",
//   "Sex": "female",
//   "Birthdate": 12452485,
//   "AdditionalData": "",
//   "Logs": []
// },
// {
//   "PhoneNumber": "77051692032",
//   "Uin": 707708874,
//   "Name": "Владимир Панов",
//   "IsVerified": false,
//   "Email": "doamin_16@gmail.com",
//   "Sex": "male",
//   "Birthdate": 12452485,
//   "PushToken": ""
// }]