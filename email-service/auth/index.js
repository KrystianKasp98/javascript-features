import * as dotenv from "dotenv";
dotenv.config();

export default {
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_AUTH_USER,
    pass: process.env.MAIL_AUTH_PASSWORD
  }
}
