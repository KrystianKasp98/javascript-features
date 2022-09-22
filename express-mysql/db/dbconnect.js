const Sequelize = require("sequelize");
require("dotenv").config();

//we pass db name, username, password(null if not existed)
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.USER_NAME,
    process.env.USER_PASSWORD,
    {
        dialect: "mysql", //we use database mysql
        host: process.env.DB_HOST, //location of db
    }
);

module.exports = sequelize;