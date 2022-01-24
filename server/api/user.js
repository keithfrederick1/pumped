const User = require('../db/models/user');

// creates a user
const signup = (req, res) => {
  User.create(req.body)
    .then((data) => {
      res.json(data).sendStatus(201);
    }).catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// logs user in
const login = (req, res) => {};

module.exports = {
  signup, login,
};
