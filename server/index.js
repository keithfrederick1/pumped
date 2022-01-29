require('dotenv').config();
const path = require('path');
const http = require('http');
const express = require('express');
const app = require('./app');

const PORT = 3000;

const clientPATH = path.resolve(__dirname, '..', 'client', 'dist');

// Create a server
const server = http.createServer(app);
app.use(express.static(clientPATH));

// Listen on port
// DONT PUT ANYTHING AFTER THIS
app.get('/*', (req, res) => {
  res.sendFile(path.join(clientPATH, 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

server.listen(PORT, () => {
  console.log(`listening on http://127.0.0.1:${PORT}`);
});
