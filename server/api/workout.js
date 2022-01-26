const axios = require('axios');
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
// id is going to be sent with an axios request as a property on the req.params object.
const getWorkoutsByCategory = (req, res) => axios.get('https://wger.de/api/v2/exercise/?language=2&limit=100')
  .then((data) => {
    res.status(200);
    console.log('hello');
    res.send(data);
  })
  .catch((err) => {
    res.status(500);
    res.error(err);
  });

module.exports = {
  addWorkout, getWorkoutsByCategory,
};
