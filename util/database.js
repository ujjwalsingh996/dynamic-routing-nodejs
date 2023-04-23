const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', '9a3e#8e8', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
