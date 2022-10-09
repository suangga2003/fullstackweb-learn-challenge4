const express = require("express");
const path = require("path");

const PUBLIC_DIRECTORY = path.join(__dirname, "../public");

const app = express();
const port = process.env.PORT || 8000;
app.use(express.static("public"));

app.get("/example", function (req, res) {
  // res.sendFile(path.join(__dirname, "index.html"));
  res.sendFile(path.join(PUBLIC_DIRECTORY, "index.example.html"));
});
app.get("/cari", function (req, res) {
  res.sendFile(path.join(PUBLIC_DIRECTORY, "carimobil.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
