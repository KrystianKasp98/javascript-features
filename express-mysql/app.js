const express = require("express");
const {json, urlencoded} = require("body-parser");
const cors = require("cors");
const {handleRequest} = require("./utils/index");
const Test = require("./models/test");

// app init
const app = express();
const mainPath = "/test";

//middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));

//db
app.get(mainPath, async(req, res) => handleRequest(req,res, handleGet));

app.all("*", (req, res) => {
    res.status(404).json({message: 'bad request'});
});

const handleGet = async (req, res) =>{
    const tests = await Test.findAll();
    return res.status(200).json({tests})
}

module.exports = {app};