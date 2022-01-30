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

// Workout.create({
//   workoutName: 'incline bench press',
//   description: 'Lean back and enjoy the burn.',
// }).then(() => {}).catch((err) => { console.error(err); });

// Workout.create({
//   workoutName: 'arm curls',
//   description: 'pump up those mosquito bites you call biceps',
// }).then(() => {}).catch((err) => { console.error(err); });

// Workout.create({
//   workoutName: '5 mile jog',
//   description: '5 mile jog while listening to music',
// }).then(() => {}).catch((err) => { console.error(err); });

// Workout.create({
//   workoutName: 'lunges',
//   description: 'Lunges activate everything.',
// }).then(() => {}).catch((err) => { console.error(err); });

module.exports = {
  addWorkout,
};
