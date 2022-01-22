const { DataTypes } = require('sequelize');
const db = require('..');

//define a table.
const WorkoutPlan = db.define(
  'WorkoutPlan',
  {
    // Model attributes are defined here.
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here if needed.
  }
);

// Sync all models that are not
// already in the database.
WorkoutPlan.sync({ alter: true })
  .then(() => {
    console.log('WorkoutPlan table synced');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = WorkoutPlan;
