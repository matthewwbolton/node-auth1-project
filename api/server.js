require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.json({api: the API is up and running!!!})
})

module.exports = server;
