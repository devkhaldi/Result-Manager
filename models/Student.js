const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  aderess: { type: String, required: true },
  fatherName: { type: String, required: true },
  fatherPhone: { type: String, required: true },
  motherName: { type: String, required: true },
  motherPhone: { type: String, required: true },
  guardianName: { type: String },
  guardianPhone: { type: String },
  dateBirth: { type: Date, required: true },
  email: {
    type: String,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  sex: { type: String, required: true },
  dateJoining: { type: Date, required: true },
  class: { type: String, required: true },
  section: { type: String, required: true },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
    match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
  },
})

module.exports = Student = mongoose.model('Student', StudentSchema)
