const path = require('path');
const http = require('http');
const express = require('express');
const app = require('./app');
const db = require('./db/index');

const clientPATH = path.resolve(__dirname, '..', 'client', 'dist');

// Create a server
const server = http.createServer(app);
app.use(express.static(clientPATH));

// Listen on port
db.sync({ alter: true })
  .then(() => {
    console.log('All tables synced');
    server.listen(3000, () => {
      console.log('listening on port 3000');
    });
  })
  .catch((err) => {
    console.error(err);
  });
