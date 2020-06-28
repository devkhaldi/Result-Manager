const Router = require('express').Router()
const mongoose = require('mongoose')
const Subject = require('../models/Subject')

Router.get('/', async (req, res) => {
  try {
    const subjects = await Subject.find()
    res.json({ subjects })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', async (req, res) => {
  const subject = new Subject(req.body)
  try {
    const doc = await subject.save()
    res.json({ subject: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', (req, res) => {
  try {
    Subject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, subject) => {
        if (error) res.status(500).json({ error })
        res.json({ subject })
      }
    )
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.delete('/:id', (req, res) => {
  Subject.findByIdAndRemove(req.params.id, (error, result) => {
    if (!result) return res.status(404).json({ message: 'not found' })
    res.json({ message: 'deleted' })
  })
})

module.exports = Router
