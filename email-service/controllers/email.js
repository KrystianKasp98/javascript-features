import { __dirname } from "../config.js";
import nodemailer from "nodemailer";
import auth from "../auth/index.js";

export default class {
  static sendEmail(req, res) {
    const {from, to, subject, message} = req.body;
    const transporter = nodemailer.createTransport(auth);
    const mailOptions = { from, to, subject, text: message};
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error)
          res.set({
            'isSent': false
          });
      } else {
          console.log("Email Sent: " + info.response);
          res.set({
            'isSent': true
          });
      }
      res.redirect("/");
    });
  }
}