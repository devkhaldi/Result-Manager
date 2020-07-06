const Router = require('express').Router()
const mongoose = require('mongoose')
const Institute = require('../models/Institute')
const { validationResult } = require('express-validator')
const { validateInstitute } = require('../middlewares/validate')

Router.get('/', async (req, res) => {
  try {
    const institutes = await Institute.find()
    res.json({ institutes })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.get('/:id', async (req, res) => {
  try {
    const institute = await Institute.findById(req.params.id)
    res.json({ institute })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
  const institute = new Institute({ _id: mongoose.Types.ObjectId(), ...req.body })
  try {
    const doc = await institute.save()
    res.json({ institute: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
  try {
    Institute.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, institute) => {
        if (error) res.status(500).json({ error })
        res.json({ institute })
      }
    )
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.delete('/:id', (req, res) => {
  Institute.findByIdAndRemove(req.params.id, (error, result) => {
    if (!result) return res.status(404).json({ message: 'not found' })
    res.json({ message: 'deleted' })
  })
})

module.exports = Router
