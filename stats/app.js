const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mongo = require('mongodb').MongoClient

const mongoUrl = (() => {
  return process.env.NODE_ENV === 'production'
    ? process.env.MONGO_CONNECTION || 'mongodb://@mongo:27017/stats'
    : 'mongodb://@localhost:27018/stats'
})()

mongo.connect(mongoUrl, (err, database) => {
  if (err) {
    return console.log(`Error Connecting to ${mongoUrl}`)
  }

  app.use(cors())
  app.use(bodyParser.json())

  let db = database.db('stats')
  let users = db.collection('users')

  app.get('/users', (req, res) => {
    users
      .find({})
      .toArray((err, data) => {
        if (err) {
          res.json(err)
        }

        res.json(data)
      })
  })

  app.post('/users', (req, res) => {
    let data = {
      email: req.headers.email,
      authId: req.headers.userauthid
    }

    users
      .find({ "$or": [{ "email": data.email }, { "authId": data.authId }] }, { $exists: true })
      .toArray((err, doc) => {
        if (err) {
          res.statusCode = 500
          return res.json(err)
        }

        if(doc) {
          res.statusCode = 500
          return res.json('Record already exists')
        } else if(!doc) {
          users.insert(data, (err, data) => {
            if (err) {
              res.statusCode = 500
              return res.json(err)
            }

            res.statusCode = 201
            res.json(data)
          })
        }
      })
  })

  const port = process.env.PORT || 3000
  app.listen(port)

  console.log(`viddy RESTful stats server started on: ${port}`)
})

process.on('SIGTERM', () => app.stop())