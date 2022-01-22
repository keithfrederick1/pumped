const { DataTypes } = require('sequelize');
const db = require('..');

//define a table.
const UserLog = db.define(
  'UserLog',
  {
    // Model attributes are defined here.
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    // Other model options go here if needed.
  }
);

// Sync all models that are not
// already in the database.
UserLog.sync({ alter: true })
  .then(() => {
    console.log('UserLog table synced');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = UserLog;
