const Router = require('express').Router()
const mongoose = require('mongoose')
const Grade = require('../models/Grade')

const { validationResult } = require('express-validator')
const { validateGrade } = require('../middlewares/validate')

Router.get('/', async (req, res) => {
  try {
    const grades = await Grade.find()
    res.json({ grades, total: grades.length })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.get('/:id', async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id)
    res.json({ grade })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', validateGrade('CREATE_GRADE'), async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
  const grade = new Grade({ _id: mongoose.Types.ObjectId(), ...req.body })
  try {
    const doc = await grade.save()
    res.json({ grade: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', validateGrade('UPDATE_GRADE'), (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
  try {
    Grade.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, grade) => {
      if (error) res.status(500).json({ error })
      res.json({ grade })
    })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.delete('/:id', (req, res) => {
  Grade.findByIdAndRemove(req.params.id, (error, result) => {
    if (!result) return res.status(404).json({ message: 'not found' })
    res.json({ message: 'deleted' })
  })
})

module.exports = Router
