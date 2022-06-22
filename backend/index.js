const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(__dirname + "/dist"));

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port);

console.log("Server stared. Listening port " + port);
