'use strict';

// grabs the libray for express
const express = require('express');

const PORT = 80;
const HOST = '0.0.0.0';

// creates express app called "app"
const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  console.log("Sending JSON to requester");
  res.json({
    "message": "My name is Densell",
    "timestamp": Math.floor(Date.now() / 1000), // generates a timestamp in seconds
    "test": "This is a test, also this is a new Deployment",
    // "fail": "I will failt the Unit Test!"
  })
});

// Tells the console what host and what port the server is running on
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});