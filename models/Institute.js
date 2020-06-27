const mongoose = require('mongoose')

const instituteSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
    match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
  },
  settings: {
    instituteName: { type: String },
    adress: { type: String },
    email: { type: String },
    phone: { type: String },
    website: { type: String },
    defaultLanguage: { type: String },
    yearStart: { type: Number, min: 2010, default: 2015 },
    yearEnd: {
      type: Number,
      min: 2010,
      max: new Date().getFullYear(),
      default: new Date().getFullYear(),
    },
    theme: { type: String },
  },
})

module.exports = Institute = mongoose.model('Institute', instituteSchema)
