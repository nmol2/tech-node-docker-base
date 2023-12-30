const Sequelize = require("sequelize");
const { DatabaseConfig } = require("./config");

const sequelize = new Sequelize(
  DatabaseConfig.database,
  DatabaseConfig.username,
  DatabaseConfig.password,
  {
    host: DatabaseConfig.host,
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

module.exports = {
  sequelize
};