/* This file is used to define the associative relationships between tables so we
can avoid circular dependencies. */
const db = require('../index');
const WorkoutPlan = require('./workoutPlan');
const User = require('./user');
const Workout = require('./workout');
const UserLog = require('./userLog');
const Calendar = require('./calendar');
/* A user has a 7 day workout calendar. A workout calendar has up to 7
 workout plans. Workout plans can have a number of individual workouts. */

/* Creating associations between tables requires using the A.hasOne(B),
A.belongsTo(B), A.hasMany(B), and A.belongsToMany(B, { through 'C'}). */

// A User has many workout plans and user logs.
User.hasMany(WorkoutPlan);
User.hasMany(UserLog);
User.hasOne(Calendar);

// A User log belongs to a User.
UserLog.belongsTo(User);

// A Calendar belongs to a User and has many workout plans.
Calendar.belongsTo(User);
Calendar.hasMany(WorkoutPlan);

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

module.exports = {
  WorkoutPlan, User, UserLog, Workout, Calendar,
};
