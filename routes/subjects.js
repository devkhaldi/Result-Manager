const Router = require('express').Router()
const mongoose = require('mongoose')
const Subject = require('../models/Subject')
const { validationResult } = require('express-validator')
const { validateSubejct } = require('../middlewares/validate')

Router.get('/', async (req, res) => {
  try {
    const subjects = await Subject.find()
    res.json({ subjects, total: subjects.length })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.get('/:id', async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id)
    res.json({ subject })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', validateSubejct('CREATE_SUBJECT'), async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.mapped() })
  const subject = new Subject({ _id: mongoose.Types.ObjectId(), ...req.body })
  try {
    const doc = await subject.save()
    res.json({ subject: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', validateSubejct('UPDATE_SUBJECT'), (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.mapped() })
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
