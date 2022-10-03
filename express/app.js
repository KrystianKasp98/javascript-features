const express = require("express");
const {json, urlencoded} = require("body-parser");
const cors = require("cors");
const hemlmet = require("helmet");

const routerTest = require("./routes/test");
const ErrorHandler = require("./error/index");

// app init
const app = express();
const mainPath = "/test";

//middlewares
app.use(hemlmet());
app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));

//routes
app.use(mainPath, routerTest);

app.all("*", ErrorHandler.badRequest);

module.exports = {app};
