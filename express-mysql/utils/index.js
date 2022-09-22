const handleRequest = (req, res, callback) => {
    try {
      callback(req, res);
    } catch (err) {
      res.status(500).send(err);
    }
};

module.exports = {handleRequest};
