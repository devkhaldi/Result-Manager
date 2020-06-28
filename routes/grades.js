const Router = require('express').Router()
const mongoose = require('mongoose')
const Grade = require('../models/Grade')

Router.get('/', async (req, res) => {
  try {
    const grades = await Grade.find()
    res.json({ grades, total: grades.length })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', async (req, res) => {
  const grade = new Grade(req.body)
  try {
    const doc = await grade.save()
    res.json({ grade: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', (req, res) => {
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
