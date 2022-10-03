const {data} = require("../data/index"); //import dbAPI instead static data
const ErrorHandler = require("../error/index");

class ControllerTest extends ErrorHandler {
  constructor() {
    super();
  }

  static async handleGet(req, res) {
    const callback = async () => {
      // some await call to db
      res.status(200).json({data});
    }

    await super.provider(req, res, callback);
  }

  static async handlePost(req, res) {
    const callback = async () => {
      // some await call to db
      const {name} = req.body;
      if(!name){
        super.badRequestMsg(req, res, {message: "name is required"});
      } else {
        // that's not a good way to set id
        const item = {id: new Date().getTime(), name};
        data.push(item);
        res.status(200).json(item);
      }
    }

    await super.provider(req, res, callback);
  }

  static async handlePut(req, res) {
    const callback = async () => {
      // some await call to db
      const {id, name} = req.body;
      const index = data.findIndex(item=>item.id === id);
      if (index===-1){
        super.badRequestMsg(req, res, {message: `item with id: ${id} not found`});
      } else {
        data[index] = {...data[index], name};
        res.status(200).json({item: data[index]});
      }
    }

    await super.provider(req, res, callback);
  }

  static async handleDelete(req, res) {
    const callback = async () => {
      // some await call to db
      const {id} = req.body;
      const index = data.findIndex(item=>item.id === id);
      if (index===-1){
        super.badRequestMsg(req, res, {message: `item with id: ${id} not found`});
      } else {
        const item = data[index];
        data.splice(index, 1);
        res.status(200).json({deletedItem: item});
      }}

      await super.provider(req, res, callback);
    }
}

module.exports = ControllerTest;
