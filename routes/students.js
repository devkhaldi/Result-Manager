const Router = require('express').Router()
const mongoose = require('mongoose')
const Student = require('../models/Student')
const { validationResult } = require('express-validator')
const { validateStudent } = require('../middlewares/validate')
Router.get('/', async (req, res) => {
  try {
    const students = await Student.find()
    res.json({ students, total: students.length })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
    res.json({ student })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', validateStudent('CREATE_STUDENT'), async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.mapped() })
  const student = new Student({ _id: mongoose.Types.ObjectId(), ...req.body })
  try {
    const doc = await student.save()
    res.json({ student: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', validateStudent('UPDATE_STUDENT'), (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.mapped() })
  try {
    Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, student) => {
        if (error) res.status(500).json({ error })
        res.json({ student })
      }
    )
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.delete('/:id', (req, res) => {
  Student.findByIdAndRemove(req.params.id, (error, result) => {
    if (!result) return res.status(404).json({ message: 'not found' })
    res.json({ message: 'deleted' })
  })
})

module.exports = Router
