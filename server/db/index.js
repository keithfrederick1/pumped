/**
 * Notes: Make sure the DB is created in the shell before proceeding.
 * Also be sure to have all dependencies installed, including sequelize-cli.
 * You might need to run npm i --save sequelize to use it locally. Or install it globally.
 * When exporting functions and models and such, be sure to decide where you are destructuring
 * and try to keep it consistent so there are fewer bugs to work out.
 */

const { Sequelize } = require('sequelize');
// const { User } = require('./models/user.js')
// const { Workout } = require('./models/workout.js')
// const { WorkoutPlan } = require('./models/workoutPlan.js')

/*Here we are making a connection to a database called pumpdb. We capture that connection in 
a variable that we can later use to define tables. */
const db = new Sequelize('pumpdb', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

//This simply authenticates our connection. We don't need it after successfully establishing a connection.
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

module.exports = db;
