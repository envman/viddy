const path = require('path')
const fs = require('fs')
const mongo = require('mongodb').MongoClient

const express = require('express')

const videoPath = path.join('/usr/src', 'videos')
const mongoUrl = 'mongodb://video_mongo:27017/videos'

mongo.connect(mongoUrl, (err, db) => {
  if (err) {
    return console.log(`Error Connecting to ${mongoUrl}`)
  }
  
  const app = express()
  
  app.use('/static', express.static(videoPath))

  let videos = db.collection('videos')

  app.post('/upload', (req, res) => {
    // videos.insert()
  })

  app.listen(80)
})

process.on('SIGTERM', function() {
  app.stop()
})
