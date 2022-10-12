import { __dirname } from "../config.js";

export default class {
  static route(req, res) {
    res.sendFile(path.join(__dirname, "static/index.html"));
  }
}
