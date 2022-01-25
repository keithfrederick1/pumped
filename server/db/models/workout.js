const { DataTypes } = require('sequelize');
const db = require('../index');

// define a table.
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
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mins: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    // Other model options go here if needed.
  },
);

// Sync all models that are not
// already in the database.
// Workout.sync({ alter: true })
//   .then(() => {
//     console.log('Workout table synced');
//   })
//   .catch((err) => {
//     console.error(err);
//   });

module.exports = Workout;
