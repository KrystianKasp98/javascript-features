class ErrorHandler {
  static async provider(req, res, callback) {
    try {
      await callback(req, res);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static badRequest(req, res) {
    res.status(404).send("Bad request");
  }

  static badRequestMsg(req, res, jsonResponse) {
    res.status(404).json(jsonResponse);
  }
}

module.exports = ErrorHandler;
