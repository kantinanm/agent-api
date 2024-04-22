const express = require("express");
const router = express.Router();

router.get("/welcome", (req, res) =>
  res.send({
    error: false,
    message: "Welcome NodeJS, Express",
  })
);

module.exports = {
  routes: router,
};
