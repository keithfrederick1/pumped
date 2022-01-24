const WorkoutPlan = require('../db/models/workoutPlan');

const getWorkoutPlan = (req, res) => {
  WorkoutPlan.findOne().then((data) => {
    res.send(data);
  }).catch((err) => {
    console.error(err);
  });
};

module.exports = {
  getWorkoutPlan,
};
