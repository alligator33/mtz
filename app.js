require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//require chalk module to give colors to console text

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("Connected to Mongo Database Successfully");
    })
    .catch((err) => {
        console.log("Failed to Connect to MongoDb ", err);
    });

//routes
const mailer = require("./api/service/mailer");
const traders = require("./api/routes/trader");
const guests = require("./api/routes/guest");
const comments = require("./api/routes/comment");
const replys = require("./api/routes/reply");
const user = require("./api/routes/user");
const upload = require("./api/routes/upload");
// const session = require('express-session');

//middleware
app.use(logger("dev"));
app.use("/uploads", express.static("uploads"));
//to parsee the body of incoming request (body-parser)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/api/user", user);
app.use("/api/traders", traders);
app.use("/api/guests", guests);
app.use("/api/comments", comments);
app.use("/api/replys", replys);
app.use("/api/upload", upload);
app.use("/api/mailer", mailer);

app.use((req, res, next) => {
    next();
});

app.use(express.static(__dirname + "/dist/"));
//handle SPA
app.get("*", (req, res) => res.sendFile(__dirname + "/dist/index.html"));

module.exports = app;
