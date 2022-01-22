const express = require('express');
const {User} = require('./db/models/user');
const app = express();
app.use(express.json());
app.set('port, 3000');

app.post('/signup', function(req, res) {
  User.create({
    username: req.body,
  })
  .then(() => {
    console.log('created username')
    res.sendStatus(201);
  })
  .catch((err) =>  {
    console.error(err);
    res.sendStatus(500);
  })
}
)