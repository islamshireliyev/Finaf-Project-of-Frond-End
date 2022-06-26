var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.end("index request");
});

app.listen(PORT, () => {
  console.log(`server ${PORT} postunde calismaq`);
});
