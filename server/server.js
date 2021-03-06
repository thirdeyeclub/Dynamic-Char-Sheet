require("dotenv").config();
const express = require("express");
const server = express();

//middleware
const helmet = require('helmet');
const cors = require('cors');
server.use(helmet());
server.use(cors());
//imports for routes
const CharSheet = require("./router/sheet")
//routes
server.use("/example", CharSheet)

var randomMessage = [
    "Hello World",
    "Welcome Developer",
    "Sometimes you just got to roll the dice",
    "Welcome to the happiest server on this side of the sea, love.",
    "Reminder: Tip Your Server",
    "Don't Worry 🐝  Happy",
    ];
var message = randomMessage[Math.floor(Math.random() * randomMessage.length)];

    server.get("/", (req, res) => {
    res.status(200).json({ message });
    });

    let now = new Date().getTime();

    if (require.main == module) {
    server.listen(process.env.PORT, () => {
        console.log(
        `*\n
        ${message}\n
        TIME IS: ${now}\n
        🚀  Server is running at http://localhost:${process.env.PORT}/ 
        `
        );
    });
    } else {
    module.exports = server;
    }
