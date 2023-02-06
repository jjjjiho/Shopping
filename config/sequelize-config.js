const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testDB', 'root', '&d#u>Q2~,]4kQ{zZ', {
  host: '34.64.248.230',
  dialect: 'mysql',
});

module.exports = sequelize;