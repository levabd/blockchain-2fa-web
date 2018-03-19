const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Client Schema
const ClientSchema = mongoose.Schema ({

  phoneNumber: {
    type: String,
    unique: true,
  },
  uin: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,//.toLowerCase()
  },
  sex: {
    type: String,
     enum: ['Мужской', 'Женский'],
    required: true,
  },
  birthDate: {
    type: Date,
  },
  logs:[],
  updated_date: { type: Date, default: Date.now },
});

const Client = module.exports = mongoose.model('Client', ClientSchema);
