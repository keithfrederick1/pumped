const { DataTypes } = require('sequelize');

const { db } = require('..'); //<-- defaults to index.js as the only other file in folder.
//define a table.
const WorkoutPlan = db.define(
  'WorkoutPlan',
  {
    // Model attributes are defined here.
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // workouts: {
    //   type: DataTypes.ENUM,
    //   allowNull: false,
    // },
    user_id: {
      type: DataTypes.INTEGER,
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

module.exports = {WorkoutPlan}
