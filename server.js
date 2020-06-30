const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
const app = express()
require('dotenv').config()

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
  })
  .then(res => console.log('Connected to MongoDB'))
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

// routes
app.use('/api/classes', require('./routes/classes'))
app.use('/api/exams', require('./routes/exams'))
app.use('/api/grades', require('./routes/grades'))
app.use('/api/institutes', require('./routes/institutes'))
app.use('/api/sections', require('./routes/sections'))
app.use('/api/students', require('./routes/students'))
app.use('/api/subjects', require('./routes/subjects'))
app.use('/api/teachers', require('./routes/teachers'))

app.use((req, res) => res.status(404).json({ message: 'Not Found!' }))
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started ${PORT}`))
