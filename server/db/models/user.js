const { DataTypes } = require('sequelize');
// const sequelize = require('sequelize').Sequelize;
const { db }  = require('../index'); //<-- defaults to index.js as the only other file in folder.
//define a table.

// console.log(db)
const User = db.define('User', {
    // Model attributes are defined here.
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // workoutPlans: {
    //   type: DataTypes.ENUM,
    //   allowNull: true,
    // },
    log: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    // Other model options go here if needed.
  }
);


// // Sync all models that are not
// // already in the database.
User.sync()

module.exports = {User}
