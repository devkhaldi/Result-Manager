const mongoose = require('mongoose')

const SectionSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { type: String, required: true },
})

module.exports = Section = mongoose.model('Section', SectionSchema)
