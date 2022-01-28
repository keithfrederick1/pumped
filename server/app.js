// Using express to create app functionality and routing
const express = require('express');
const { pumpedRouter } = require('./api/routes');
const { authRouter } = require('./api/authRouter');



const app = express();
// use api/router as the base route
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRouter);

app.use('/api/router', pumpedRouter);



module.exports = app;
