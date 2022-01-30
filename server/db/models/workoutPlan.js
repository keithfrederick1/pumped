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
  },
  {
    // Other model options go here if needed.
  },
);

module.exports = WorkoutPlan;
