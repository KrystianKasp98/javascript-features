const express = require("express");
const {json, urlencoded} = require("body-parser");
const cors = require("cors");
const hemlmet = require("helmet");


// app init
const app = express();

//middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));

//routes
app.get('/test', (req, res) => {
  res.status(200).json({message: "Hello world"});
});

// static
app.use(express.static('dist'));


module.exports = {app};