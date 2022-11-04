const express = require("express");
const {json, urlencoded} = require("body-parser");
const cors = require("cors");
const hemlmet = require("helmet");

// errorHandler
const ErrorHandler = require("./error/index");

// route instances
const routerLogin = require("./routes/login");

// app init
const app = express();
const mainPath = "/test";
const loginPath = "/login";

//middlewares
app.use(hemlmet());
app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));

// routes
app.get(mainPath, (req, res) => {
  res.status(200).json({message: 'hello'});
})
app.use(loginPath, routerLogin);

app.all("*", ErrorHandler.badRequest);

module.exports = {app};
