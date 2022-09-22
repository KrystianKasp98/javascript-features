const {app} = require("./app.js");
const sequelize = require('./db/dbconnect');
const mysql = require('mysql2/promise');

const data = require("./data/index");
const Test = require("./models/test");

require("dotenv").config();

const initializeDb = async()=>{
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.USER_NAME,
    password: process.env.USER_PASSWORD,
    port: process.env.DB_PORT
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
}

app.listen(process.env.PORT || 4000, function () {
    if (process.env.PORT !== undefined) {
      console.log(`App running on process.env.PORT     ${process.env.PORT}`);
    } else {
      console.log("App running on PORT 4000");
    }
});

sequelize
  .sync({force: true})
  .then(res => initializeDb())
  .then(res=> Test.bulkCreate(data,  { ignoreDuplicates: true }));
