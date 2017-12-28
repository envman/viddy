const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mongo = require('mongodb').MongoClient

const mongoUrl = 'mongodb://stats_mongo:27017/stats'

mongo.connect(mongoUrl, (err, db) => {
  if (err) {
    return console.log(`Error Connecting to ${mongoUrl}`)
  }

  app.use(cors())
  app.use(bodyParser.json())

  let stats = db.collection('stats')

  const port = process.env.PORT || 3000
  app.listen(port)

  console.log(`viddy RESTful stats server started on: ${port}`)
})

process.on('SIGTERM', () => app.stop())