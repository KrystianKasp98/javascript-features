import app from "./app.js";
import * as dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT || 3000, function () {
  if (process.env.PORT !== undefined) {
    console.log(`App running on process.env.PORT ${process.env.PORT}`);
  } else {
    console.log("App running on PORT 3000");
  }
});
