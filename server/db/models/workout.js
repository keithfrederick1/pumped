const { DataTypes } = require('sequelize');

const { db } = require('..'); //<-- defaults to index.js as the only other file in folder.
//define a table.
const Workout = db.define(
  'Workout',
  {
    // Model attributes are defined here.
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    // Other model options go here if needed.
  }
);

// Sync all models that are not
// already in the database.
db.sync();

module.exports = {Workout}
