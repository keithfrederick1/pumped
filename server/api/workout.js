const Workout = require('../db/models/workout');

// Add a workout to workouts table
const addWorkout = (req, res) => {
  Workout.create(req.body)
    .then((data) => {
      res.json(data).sendStatus(201);
    }).catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
};

module.exports = {
  addWorkout,
};
