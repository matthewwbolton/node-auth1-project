require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const userRouter = require("../users/userRouter");
const authRouter = require("../authentication/authRouter");

const server = express();

// const sessionConfig = {
//   name: "random-name",
//   secret:
//     process.env.SESSION_SECRET || "this is a random development session secret",
//   resave: false,
//   saveUninitialized: process.env.SEND_COOKIES || true,
//   cookie: {
//     maxAge: 1000 * 60 * 60,
//     secure: process.env.USE_SECURE_COOKIES || false,
//     httpOnly: true,
//   },
// };

server.use(helmet());
server.use(express.json());
server.use(cors());
// server.use(session(sessionConfig));

server.use("/api/users", userRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: `the API is up and running!!!` });
});

module.exports = server;
