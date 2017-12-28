const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 3000
app.listen(port)

console.log(`viddy RESTful stats server started on: ${port}`)