const { Router } = require('express');
const { signup, login, deleteUser } = require('./user');
const { getWorkoutPlan } = require('./workoutPlan');
const { addWorkout, getWorkoutsByCategory } = require('./workout');
const { addToUserLog } = require('./userLog');
const axios = require('axios');

const pumpedRouter = Router();

/* routes pointing to functions that interface with the tables
 in the db. */

 //--------change these------
// pumpedRouter.post('/signup', signup);

// pumpedRouter.get('/login', login);
//---------------

pumpedRouter.get('/workoutPlan', getWorkoutPlan);

pumpedRouter.post('/addWorkout', addWorkout);

pumpedRouter.post('/addToUserLog', addToUserLog);

pumpedRouter.delete('/deleteUser/:username', deleteUser);

pumpedRouter.get('/workoutsByCategory', async(req, res) => {
  const result = await axios.get('https://wger.de/api/v2/exercise/?language=2&limit=100')
  console.log(result.data.results);
  res.send(result.data.results);
});

module.exports = { pumpedRouter };
