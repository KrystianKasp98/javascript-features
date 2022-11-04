const CryptoJS = require("crypto-js");
require("dotenv").config();

class CryptoJsHandlerJs {

  static #getSecureKey() {
    return process.env.SECURE_KEY;
  }

  static encryptPassword(password) {
    return CryptoJS.AES.encrypt(password, this.#getSecureKey()).toString();
  }

  static decryptPassword(encryptedPassword) {
    const bytes  = CryptoJS.AES.decrypt(encryptedPassword, this.#getSecureKey());
    return bytes.toString(CryptoJS.enc.Utf8)
  }
}

module.exports = CryptoJsHandlerJs;