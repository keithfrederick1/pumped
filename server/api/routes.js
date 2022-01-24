const { Router } = require('express');
const { signup, login } = require('./user');
const { getWorkoutPlan } = require('./workoutPlan');

const pumpedRouter = Router();

// route pointing to user signup
pumpedRouter.post('/signup', signup);
// route pointing to user login
pumpedRouter.get('/login', login);

pumpedRouter.get('workoutPlan', getWorkoutPlan);

module.exports = { pumpedRouter };
