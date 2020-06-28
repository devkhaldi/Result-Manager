const Router = require('express').Router()
const mongoose = require('mongoose')
const Institute = require('../models/Institute')

Router.get('/', async (req, res) => {
  try {
    const institutes = await Institute.find()
    res.json({ institutes })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', async (req, res) => {
  const institute = new Institute(req.body)
  try {
    const doc = await institute.save()
    res.json({ institute: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', (req, res) => {
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
