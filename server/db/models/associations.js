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

// Checking each table is a valid table.
// console.log(User, WorkoutPlan, Workout, UserLog, 10101010);

db.sync({ alter: true })
  .then(() => {
    console.log('All tables synced');
  })
  .catch((err) => {
    console.error(err);
  });
