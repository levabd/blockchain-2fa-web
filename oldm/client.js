const mongoose = require('mongoose');
 
// Client Schema
const ClientSchema = mongoose.Schema ({
 
  PhoneNumber: {
    type: String,
    unique: true,
  },
  Uin: {
    type: Number,
    unique: true,
    required: true,    
  },
  Name: {
    type: String,
    required: true,
  },
  IsVerified: {
    type: Boolean,
    default: false,
  },
  Email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,//.toLowerCase()
  },
  Sex: {
    type: String,
     enum: ['male', 'female'],
    required: true,
  },
  BirthDate: {
    type: Number,
  },
  Logs:[],
  address: {
    type: String,
  },
  updated_date: { type: Date, default: Date.now },
});

ClientSchema.pre('save', function (next) {
  var self = this;
  Client.find({PhoneNumber : self.PhoneNumber}, function (err, docs) {
      if (!docs.length){
          next();
      }else{                
          // console.log(`User with ${self.PhoneNumber} already exists`);
          next(new Error(`User with phone number ${self.PhoneNumber} already exists`));
      }
  });
  Client.find({Uin : self.Uin}, function (err, docs) {
    if (!docs.length){
        next();
    }else{                
        // console.log(`User with ${self.Uin} already exists`);
        next(new Error(`User with uin ${self.Uin} already exists`));
    }
});
}) ;

const Client = module.exports = mongoose.model('Client', ClientSchema);

