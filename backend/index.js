const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8000;

app.use(function(req, res, next) {

  if (!/(\/[^\/]+(.js))|(\/[^\/]+(.css))/.test(req.url)) {

  if (/\/[^\/]+/.test(req.url)) {
    req.url = '/index.html';
  }
  }
  next();
});

app.use(express.static(__dirname + "/dist"));

app.get("*.css", function (req, res) {
  res.sendFile(path.resolve(__dirname, req.url));
});

app.get("*.js", function (req, res) {
  res.sendFile(path.resolve(__dirname, req.url));
});

// app.get("*", function (req, res) {
//   res.sendFile(path.resolve(__dirname, "/index.html"));
// });

app.listen(port);

console.log("Server stared. Listening port " + port);
