const Router = require('express').Router()
const mongoose = require('mongoose')
const Teacher = require('../models/Teacher')

Router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.find()
    res.json({ teachers })
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

Router.post('/', async (req, res) => {
  const teacher = new Teacher(req.body)
  try {
    const doc = await teacher.save()
    res.json({ teacher: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', (req, res) => {
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
