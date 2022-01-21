const path = require('path');
const http = require('http');
const express = require('express');
const clientPATH = path.resolve(__dirname, '..', 'client', 'dist');
const app = express();
const server = http.createServer(app);
app.use(express.static(clientPATH));
server.listen(3000, () => {
  console.log(`listening on port 3000`);
});
