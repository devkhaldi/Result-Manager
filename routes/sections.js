const Router = require('express').Router()
const mongoose = require('mongoose')
const Section = require('../models/Section')

Router.get('/', async (req, res) => {
  try {
    const sections = await Section.find()
    res.json({ sections })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.get('/:id', async (req, res) => {
  try {
    const section = await Section.findById(req.params.id)
    res.json({ section })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
  const section = new Section({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    content: req.body.content,
  })
  try {
    const doc = await section.save()
    res.json({ section: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
  try {
    Section.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, section) => {
        if (error) res.status(500).json({ error })
        res.json({ section })
      }
    )
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.delete('/:id', (req, res) => {
  Section.findByIdAndRemove(req.params.id, (error, result) => {
    if (!result) return res.status(404).json({ message: 'not found' })
    res.json({ message: 'deleted' })
  })
})

module.exports = Router
