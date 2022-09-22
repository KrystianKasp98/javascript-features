const sequelize = require('../db/dbconnect');
const Sequelize = require("sequelize");

const Test = sequelize.define("tests",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Test;