const WorkoutPlan = require('../db/models/workoutPlan');

// get dat workout plan to view for the calendar an stuff
const getWorkoutPlan = (req, res) => {
  WorkoutPlan.findOne()
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      console.warn(err);
    });
};

// Post request to add a user generated workout plan.
const createWorkoutPlan = (req, res) => {
  WorkoutPlan.create(req.body)
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      console.warn(err);
      res.send(500);
    });
};

module.exports = {
  getWorkoutPlan, createWorkoutPlan,
};
