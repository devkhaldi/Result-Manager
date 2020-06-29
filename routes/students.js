const Router = require('express').Router()
const mongoose = require('mongoose')
const Student = require('../models/Student')

Router.get('/', async (req, res) => {
  try {
    const students = await Student.find()
    res.json({ students })
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

Router.post('/', async (req, res) => {
  const student = new Student(req.body)
  try {
    const doc = await student.save()
    res.json({ student: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', (req, res) => {
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
