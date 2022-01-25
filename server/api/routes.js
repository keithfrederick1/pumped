const { Router } = require('express');
const { signup, login } = require('./user');
const { getWorkoutPlan } = require('./workoutPlan');
const { addWorkout } = require('./workout');
const { addToUserLog } = require('./userLog');

const pumpedRouter = Router();

/* routes pointing to functions that interface with the tables
 in the db. */
pumpedRouter.post('/signup', signup);

pumpedRouter.get('/login', login);

pumpedRouter.get('/workoutPlan', getWorkoutPlan);

pumpedRouter.post('/addWorkout', addWorkout);

pumpedRouter.post('/addToUserLog', addToUserLog);

module.exports = { pumpedRouter };
