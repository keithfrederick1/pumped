const UserLog = require('../db/models/userLog');

const addToUserLog = (req, res) => {
  UserLog.create(req.body).then((data) => {
    res.json(data).sendStatus(201);
  }).catch((err) => {
    console.warn(err);
  });
};

module.exports = {
  addToUserLog,
};
