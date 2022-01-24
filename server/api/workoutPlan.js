const workoutPlan = require('../db/models/workoutPlan');

const getWorkoutPlan = (req, res) => {
  workoutPlan.findOne().then(() => {

  }).catch((err) => {
    console.error(err);
  });
};

module.exports = {
  getWorkoutPlan,
};
