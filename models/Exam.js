const mongoose = require('mongoose')

const ExamSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, required: true },
  date: { type: Date, required: true },
  classes: [String],
  status: { type: String, maxlength: 1, required: true },
})

module.exports = Exam = mongoose.model('Exam', ExamSchema)
