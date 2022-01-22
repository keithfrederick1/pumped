const { DataTypes } = require('sequelize');
const db = require('../index');

const { WorkoutPlan } = require('./workoutPlan');
console.log(db, 11111);

//define a table.

// console.log(db)
const User = db.define(
  'User',
  {
    // Model attributes are defined here.
    //Primary key
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    log: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    // Other model options go here if needed.
  }
);
// console.log(User, 22222);

//Creating associations between tables requires using the A.hasOne(B), A.belongsTo(B), A.hasMany(B), and A.belongsToMany(B, { through 'C'}).

// User.hasMany();

// // Sync all models that are not
// // already in the database.
/* if table needs to be updated, add a options object to sync { force: true} 
or { alter: true } which will not drop the table before updating it. These 
options are not limited to individual tables and can be applied to an entire 
sequelize instance. */
User.sync({ alter: true })
  .then(() => {
    console.log('User table synced');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = { User };
