/* This file is used to define the associative relationships between tables so we 
can avoid circular dependencies. */
const WorkoutPlan = require('./workoutPlan');
const User = require('./user');
const Workout = require('./workout');
const UserLog = require('./userLog');
/* Creating associations between tables requires using the A.hasOne(B), 
A.belongsTo(B), A.hasMany(B), and A.belongsToMany(B, { through 'C'}).*/

User.hasMany(WorkoutPlan);

WorkoutPlan.belongsTo(User);

console.log(User, WorkoutPlan, Workout, UserLog, 10101010);
