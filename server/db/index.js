const { Sequelize, DataTypes } = require('sequelize');
// const { User } = require('./models/user.js')
// const { Workout } = require('./models/workout.js')
// const { WorkoutPlan } = require('./models/workoutPlan.js')
const db = new Sequelize('pumpdb', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

// try {
//   sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error(err);
//   })
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }




module.exports = { db };