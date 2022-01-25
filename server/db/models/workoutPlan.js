const { DataTypes } = require('sequelize');
const db = require('../index');

const WorkoutPlan = db.define(
  'WorkoutPlan',
  {
    // Model attributes are defined here.
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here if needed.
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
