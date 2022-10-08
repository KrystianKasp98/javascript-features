const express = require("express");
const {json, urlencoded} = require("body-parser");
const cors = require("cors");
const hemlmet = require("helmet");
const Elastic = require("./src/db/index");

const dataMapping = require("./src/models/data.json");
const { data } = require("./src/data/data-1");

// http://localhost:9200
// "data-test"
// dataMapping
const routerTest = require("./src/routes/test");
const ErrorHandler = require("./src/error/index");

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

const elasticTest = new Elastic(
  "http://localhost:9200",
  "data-test",
  dataMapping,
  data
);

module.exports = {app, elasticTest};
