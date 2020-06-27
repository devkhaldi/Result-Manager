const mongoose = require('mongoose')

const SubjectSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, required: true, unique: true },
})

module.exports = Subject = mongoose.model('Subject', SubjectSchema)
