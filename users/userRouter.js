const express = require("express");
const router = express.Router();

const Users = require("./user-model");

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json({ error: `Internal Server Error` });
    });
});

module.exports = router;
