const { DataTypes } = require('sequelize');
const db = require('../index');

const WorkoutPlan = db.define(
  'WorkoutPlan',
  {
    // Model attributes are defined here.
    planName: {
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
// WorkoutPlan.sync({ alter: true })
//   .then(() => {
//     console.log('WorkoutPlan table synced');
//   })
//   .catch((err) => {
//     console.error(err);
//   });

module.exports = WorkoutPlan;
