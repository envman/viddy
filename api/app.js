const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

console.log('viddy RESTful API server started on: ' + port);