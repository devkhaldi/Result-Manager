const Router = require('express').Router()
const mongoose = require('mongoose')
const Exam = require('../models/Exam')
const { validateExam } = require('../middlewares/validate')
const { validationResult } = require('express-validator')

Router.get('/', async (req, res) => {
  try {
    const exams = await Exam.find()
    res.json({ exams, total: exams.length })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.get('/:id', async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id)
    res.json({ exam })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', validateExam('CREATE_EXAM'), async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
  const exam = new Exam(req.body)
  try {
    const doc = await exam.save()
    res.json({ exam: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', validateExam('UPDATE_EXAM'), (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
  try {
    Exam.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, exam) => {
      if (error) res.status(500).json({ error })
      res.json({ exam })
    })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.delete('/:id', (req, res) => {
  Exam.findByIdAndRemove(req.params.id, (error, result) => {
    if (!result) return res.status(404).json({ Exam: 'not found' })
    res.json({ exam: 'deleted' })
  })
})

module.exports = Router
