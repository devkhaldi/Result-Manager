const Router = require('express').Router()
const mongoose = require('mongoose')
const Exam = require('../models/Exam')

Router.get('/', async (req, res) => {
  try {
    const exams = await Exam.find()
    res.json({ exams, total: exams.length })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', async (req, res) => {
  const exam = new Exam(req.body)
  try {
    const doc = await exam.save()
    res.json({ exam: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', (req, res) => {
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
