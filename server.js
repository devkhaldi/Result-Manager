const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
require('dotenv').config()

app.use(morgan('dev'))

app.get('/', (req, res) => res.json({ message: 'Hello !' }))

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.use((req, res) => res.status(404).json({ message: 'Not Found!' }))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started ${PORT}`))
