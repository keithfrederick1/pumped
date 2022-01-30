const UserLog = require('../db/models/userLog');
const User = require('../db/models/user');

const addToUserLog = (req, res) => User.findOne({
  where: {
    username: req.body.username,
  },
})
  .then(({ id }) => {
    UserLog.create(req.body, {
      where: {
        UserId: id,
      },
    }).then((data) => {
      res.json(data).sendStatus(201);
    });
  })
  .catch((err) => {
    console.warn(err);
  });

module.exports = {
  addToUserLog,
};
