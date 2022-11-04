const ErrorHandler = require("../error/index");
const CryptoJsHandlerJs = require("../helpers/CryptoJsHandler");

class ControllerLogin extends ErrorHandler {
  constructor() {
    super();
  }

  static async handlePost(req, res) {
    const {password, state} = req.body;
    let callback;
    if (state === 'encrypt') {
      const encryptedPassword = CryptoJsHandlerJs.encryptPassword(password);
      callback = () => {
        res.status(200).json({encryptedPassword});
      }
    } else if (state === 'decrypt') {
      const decryptedPassword = CryptoJsHandlerJs.decryptPassword(password);
      callback = () => {
        res.status(200).json({decryptedPassword});
      }
    }
    else {
      callback = () => {
        res.status(200).json({message: "state is missing"});
      }
    }

    await super.provider(req, res, callback);
  }

}

module.exports = ControllerLogin;
