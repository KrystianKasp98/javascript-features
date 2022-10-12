import express from "express";
import path from "path";
import routerStatic from "./routes/index.js";
import routerEmail from "./routes/email.js";
import {__dirname, staticRoute, emailRoute} from "./config.js";

const app = express();

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "static")))

// routes
app.use(staticRoute, routerStatic);
app.use(emailRoute, routerEmail);

app.all("*", (req, res) => {
    res.sendStatus(404);
});

export default app;
