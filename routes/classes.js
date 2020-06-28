const Router = require('express').Router()
const mongoose = require('mongoose')
const Classe = require('../models/Classe')

Router.get('/', async (req, res) => {
  try {
    const classes = await Classe.find()
    res.json({ classes, total: classes.length })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.post('/', async (req, res) => {
  const classe = new Classe(req.body)
  try {
    const doc = await classe.save()
    res.json({ classe: doc })
  } catch (error) {
    res.status(500).json({ error })
  }
})
Router.put('/:id', (req, res) => {
  try {
    Classe.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, classe) => {
      if (error) res.status(500).json({ error })
      res.json({ classe })
    })
  } catch (error) {
    res.status(500).json({ error })
  }
})

Router.delete('/:id', (req, res) => {
  Classe.findByIdAndRemove(req.params.id, (error, result) => {
    if (!result) return res.status(404).json({ message: 'not found' })
    res.json({ message: 'deleted' })
  })
})

module.exports = Router
