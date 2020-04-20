const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

const Users = require("../users/user-model");

router.post("/register", (req, res) => {
  let user = req.body;

  const rounds = process.env.HASH_ROUNDS || 14;

  const hash = bcrypt.hashSync(user.password, rounds);

  user.password = hash;

  Users.addUser(user)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ errorMessage: error.message });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.loggedIn = true;
        res.status(200).json({ message: `Welcome user ${username}!` });
      } else {
        res.status(401).json({
          message: `There is no account associated with username ${username}.`,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ errorMessage: error.message });
    });
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((error) => {
      if (error) {
        res.send(
          `There was an error while attempting to log you out of the system.`
        );
      } else {
        res.send(
          `You have successfully logged out. Please visit us again soon!!!`
        );
      }
    });
  }
});

module.exports = router;
