const express = require('express')
const morgan = require('morgan')
const app = express()
require('dotenv').config()

app.use(morgan('dev'))

app.get('/', (req, res) => res.json({ message: 'Hello !' }))

app.use((req, res) => res.status(404).json({ message: 'Not Found!' }))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started ${PORT}`))
