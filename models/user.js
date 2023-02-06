const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize-config');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },

  username: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.CHAR(60),
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING(5),
    allowNull: false,
  },
});

(async function init () {
  await User.sync();
})();

module.exports = User;