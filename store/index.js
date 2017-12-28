const path = require('path')
const fs = require('fs')

const express = require('express')

const videoPath = path.join('/usr/src', 'videos')

const app = express()

app.use('/static', express.static(videoPath))

app.post('/upload', (req, res) => {
  
})

app.listen(80)