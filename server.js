const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(error))

mongoose.Promise = global.Promise
app.use(express.json())

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
app.get('/', (req, res) => res.json({ message: 'Hello !' }))
app.use((req, res) => res.status(404).json({ message: 'Not Found!' }))
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started ${PORT}`))
