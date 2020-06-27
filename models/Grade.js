const mongoose = require('mongoose')

const gradeSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, required: true },
  markForm: { type: Number, min: 0, max: 100, required: true },
  markUpTo: { type: Number, min: 0, max: 100, required: true },
  comment: { type: String },
})

module.exports = Grade = mongoose.model('Grade', gradeSchema)
