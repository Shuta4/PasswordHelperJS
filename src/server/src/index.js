const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const port = 4000;
const server = express();
mongoose.connect("mongodb://localhost/password-helper-db", { useNewUrlParser: true, useUnifiedTopology: true }, (e) => {
  if (e) console.log("Error with connecting to database.\n Error: " + e.errmsg);
  else console.log("Connected to database.")
});

server.use(bodyParser.json());
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    next()
  });
server.use('/api', require('./api.js'));

server.listen(port)
console.log("Server are running on port: " + port);
