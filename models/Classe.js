const mongoose = require('mongoose')

const ClasseSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  title: { type: String, required: true, unique: true },
  subjects: [String],
  optionalSubjects: [String],
})

module.exports = Classe = mongoose.model('Classe', ClasseSchema)
