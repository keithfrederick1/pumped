const path = require('path');
const http = require('http');
const express = require('express');
const app = require('./app');

const clientPATH = path.resolve(__dirname, '..', 'client', 'dist');

// Create a server
const server = http.createServer(app);
app.use(express.static(clientPATH));

// Listen on port
server.listen(3000, () => {
  console.log('listening on port 3000');
});
