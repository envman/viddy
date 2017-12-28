const path = require('path')
const fs = require('fs')
const mongo = require('mongodb').MongoClient

const express = require('express')
const bodyParser = require('body-parser')

const mongoUrl = 'mongodb://video_mongo:27017/videos'
const videoPath = path.join('/usr/src', 'videos')

mongo.connect(mongoUrl, (err, db) => {
  if (err) {
    return console.log(`Error Connecting to ${mongoUrl}`)
  }
  
  const app = express()
  
  app.use(bodyParser.json())
  app.use('/static', express.static(videoPath))

  let videos = db.collection('videos')

  app.post('/upload/:id/:ext', (req, res) => {
    let stream = fs.createWriteStream(path.join(videoPath, `${req.params.id}.${req.params.ext}`))
  
    req.pipe(stream).on('done', () => {
      res.send('OK')
    })
  })
  
  app.post('/update', (req, res) => {
    videos.update({id: id}, entry, {upsert: true}, (err) => {
    
      let stream = fs.createWriteStream(path.join(videoPath, 'filename'))
    
      req.pipe(stream).on('finish', () => {
        res.send('OK')
      })
    })
  })
  
  app.get('/video/:id', (req, res) => {
    videos.findOne({ id: req.params.id }).then((item) => res.json(item))
  })
  
  app.get('/videos/:tag', (req, res) => {
    videos.find({tags: req.params.tag}).toArray((err, items) => {
      if (err) {
        console.log(err)
        return res.status(500).send(err)
      }
      
      res.json(items)
    })
  })

  app.listen(80)
})

process.on('SIGTERM', function() {
  app.stop()
})
