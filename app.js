const express = require("express");
const MainRoutes = require("./routes/main_route");

var app = express();

app.use(MainRoutes.routes); //use routes

app.get("/", function (req, res) {
  res.send({
    message: "Home NodeJS, Express",
  });
});

var port = 3000;
console.log(" Port : " + port);

app.listen(port, function () {
  console.log("Starting node.js on port " + port);
});
