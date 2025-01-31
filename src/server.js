import express from "express";
import bodyParser from "body-parser";
import viewEngine from "../src/config/viewEngine";
import initWebRoute from "../src/routes/web";

// DB
import connectDB from "../src/config/ConnectDB";
require("dotenv").config();



let app = express();

// CONFIG APP

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoute(app);

connectDB();

let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log("Backend nodejs running port: " + port);
})