'use strict';

const express = require('express');
// var ip = require('ip');
// var os = require('os');

const PORT = 80;
const HOST = '0.0.0.0';
// const HOST = ip.address();
// var test = os.networkInterfaces();
console.log(HOST);

// var date_time = Math.floor(Date.now() / 1000);
// var json = {"message":"My name is Densell", "timestamp":date_time};
const app = express();
app.get('/', (req, res) => {
  // res.send('Hello World');
  res.statusCode = 200;
  console.log("Sending JSON to requester");
  // res.send(test);
  res.json({
    "message": "My name is Densell",
    "timestamp": Math.floor(Date.now() / 1000)
  })
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});