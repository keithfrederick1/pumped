/* This file is used to define the associative relationships between tables so we
can avoid circular dependencies. */
const db = require('../index');
const WorkoutPlan = require('./workoutPlan');
const User = require('./user');
const Workout = require('./workout');
const UserLog = require('./userLog');

/* Creating associations between tables requires using the A.hasOne(B),
A.belongsTo(B), A.hasMany(B), and A.belongsToMany(B, { through 'C'}). */

// A User has many workout plans and user logs.
User.hasMany(WorkoutPlan);
User.hasMany(UserLog);

// A User log belongs to a User.
UserLog.belongsTo(User);

// A WorkoutPlan belongs to a User and has many Workouts.
WorkoutPlan.belongsTo(User);
WorkoutPlan.belongsToMany(Workout, { through: 'WorkoutPlansWorkouts' });

// A Workout can belong to many WorkoutPlans.
Workout.belongsToMany(WorkoutPlan, { through: 'WorkoutPlansWorkouts' });

/* To keep changes to the database current, use the following
steps depending on needs. be sure to run this file to make the changes. */

// drop database if it exists with DROP DATABASE pumpdb in the mysql shell.

// drop all tables
// db.drop();

// sync all tables.
db.sync({ alter: true });
