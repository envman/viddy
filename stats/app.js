const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mongo = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const MongoQS = require('mongo-querystring')

const mongoUrl = (() => {
  return process.env.NODE_ENV === 'production'
    ? process.env.MONGO_CONNECTION || 'mongodb://@mongo:27017/stats'
    : 'mongodb://@localhost:27018/stats'
})()

const qs = new MongoQS({
  string: {
    toNumber: false
  }
})

mongo.connect(mongoUrl, (err, database) => {
  if (err) {
    return console.log(`Error Connecting to ${mongoUrl}`)
  }

  app.use(cors())
  app.use(bodyParser.json())

  let db = database.db('stats')
  let users = db.collection('users')

  app.get('/users', (req, res) => {
    let query = qs.parse(req.query)

    users
      .find(query)
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
      authId: req.headers.userauthid,
      videos: []
    }

    users
      .findOne({'$or': [{'email': data.email}, {'authId': data.authId}]}, (err, doc) => {
        if (err) {
          res.statusCode = 500
          return res.json(err)
        }

        if (doc) {
          res.statusCode = 500
          return res.json('Record already exists')
        } else if (!doc) {
          users.insertOne(data, (err, data) => {
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

  app.post('/users/:userId/videos/:videoId/increasecount', (req, res) => {
    let id = new ObjectId(req.params.userId)
    users
      .aggregate([
        {
          '$match': {
            '$and': [
              {'_id': id},
              {'videos.id': req.params.videoId}
            ]
          }
        },
        {'$unwind': '$videos'},
        {
          '$match': {
            'videos.id': req.params.videoId
          }
        },
        {
          "$project": {
            'id': '$videos.id',
            'count': '$videos.count'
          }
        }
      ])
      .toArray((err, data) => {
        if (err) {
          res.statusCode = 500
          return res.json(err)
        }

        if (data.length > 0) {
          users.updateOne(
            {'_id': id, 'videos.id': req.params.videoId},
            {$set: {'videos.$.count': ++data[0].count}},
            (err, result) => {
              if (err) {
                res.statusCode = 500
                return res.json(err)
              }

              res.statusCode = 200
              res.json(result)
            })
        } else {
          users.updateOne({'_id': id}, {
            $addToSet: {
              'videos': {
                'id': req.params.videoId,
                'count': 1
              }
            }
          }, (err, result) => {
            if (err) {
              res.statusCode = 500
              return res.json(err)
            }

            res.statusCode = 200
            res.json(result)
          })
        }
      })
  })

  app.get('/videos/:videoId', (req, res) => {
    users
      .aggregate([
        {
          '$match': {
            'videos.id': req.params.videoId
          }
        },
        {'$unwind': '$videos'},
        {
          '$match': {
            'videos.id': req.params.videoId
          }
        },
        {
          "$project": {
            'id': '$videos.id',
            'count': '$videos.count'
          }
        }
      ])
      .toArray((err, data) => {
        if (err) {
          res.statusCode = 500
          return res.json(err)
        }

        res.statusCode = 200
        res.json({
          totalCount: data.reduce((a, b) => a + b.count, 0)
        })
      })
  })

  const port = process.env.PORT || 3000
  app.listen(port)

  console.log(`viddy RESTful stats server started on: ${port}`)
})

process.on('SIGTERM', () => app.stop())