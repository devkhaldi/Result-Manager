const Router = require('express').Router()
const mongoose = require('mongoose')
const Teacher = require('../models/Teacher')
const { validationResult } = require('express-validator')
const { validateTeacher } = require('../middlewares/validate')

Router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.find()
    res.json({ teachers, total: teachers.length })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.get('/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id)
    res.json({ teacher })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', validateTeacher('CREATE_TEACHER'), async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.mapped() })
  const teacher = new Teacher({ _id: mongoose.Types.ObjectId(), ...req.body })
  try {
    const doc = await teacher.save()
    res.json({ teacher: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', validateTeacher('UPDATE_TEACHER'), (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.mapped() })
  try {
    Teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, teacher) => {
        if (error) res.status(500).json({ error })
        res.json({ teacher })
      }
    )
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.delete('/:id', (req, res) => {
  Teacher.findByIdAndRemove(req.params.id, (error, result) => {
    if (!result) return res.status(404).json({ message: 'not found' })
    res.json({ message: 'deleted' })
  })
})

module.exports = Router
