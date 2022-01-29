const { DataTypes } = require('sequelize');
const db = require('../index');

// define a table.
const Workout = db.define(
  'Workout',
  {
    // Model attributes are defined here.
    workoutName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
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
