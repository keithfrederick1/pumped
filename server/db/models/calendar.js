const { DataTypes } = require('sequelize');
const db = require('../index');

/* Calendar table has reference to workout plans that belong to
a User. Each day of the week can be associated with one workout plan id. */
const Calendar = db.define('Calendar', {
  calendar_id: {
    type: DataTypes.INTEGER,
  },
  monday: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tuesday: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  wednesday: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  thursday: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  friday: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  saturday: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sunday: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Calendar;
