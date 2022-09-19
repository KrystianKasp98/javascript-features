const express = require("express");
const {json, urlencoded} = require("body-parser");
const cors = require("cors");
const {handleRequest} = require("./utils/index");
const {data} = require("./data/index");

// app init
const app = express();
const mainPath = "/test";

//middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));

//middlewares but only for specified request type and url(endpoints)
app.get(mainPath, async(req, res) => handleRequest(req, res, handleGet));
app.post(mainPath, async(req, res) => handleRequest(req, res, handlePost));
app.put(mainPath, async(req, res) => handleRequest(req, res, handlePut));
app.delete(mainPath, async(req, res) => handleRequest(req, res, handleDelete));

app.all("*", (req, res) => {
    res.status(404).json({message: 'bad request'});
});

const handleGet = async (req, res) => {
    res.status(200).json({data});
}

const handlePost = async (req, res) => {
    const {name} = req.body;
    // that's not a good way to set id
    const item = {id: new Date().getTime(), name};
    data.push(item);
    res.status(200).json(item);
}

const handlePut = async (req, res) => {
    const {id, name} = req.body;
    const index = data.findIndex(item=>item.id === id);
    if (index===-1){
        res.status(404).json({message: `item with id: ${id} not found`})
    } else {
        data[index] = {...data[index], name};
        res.status(200).json({item: data[index]});
    }
}

const handleDelete = async (req, res) => {
    const {id} = req.body;
    const index = data.findIndex(item=>item.id === id);
    if (index===-1){
        res.status(404).json({message: `item with id: ${id} not found`})
    } else {
        const item = data[index];
        data.splice(index, 1);
        res.status(200).json({deletedItem: item});
    }
}

module.exports = {app};