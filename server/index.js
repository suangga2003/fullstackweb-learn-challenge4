console.log("Implement servermu disini yak 😝!");

const http = require("http");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIRECTORY = path.join(__dirname, "../public");

const getHTML = (namaFileHTML) => {
  const letakFileHTML = path.join(PUBLIC_DIRECTORY, namaFileHTML);
  return fs.readFileSync(letakFileHTML);
};

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end(getHTML("index.html"));
      return;
    case "/about":
      res.writeHead(200);
      res.end(getHTML("about.html"));
      return;
    case "/student":
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(listStudents));
      return;
    case "/example":
      res.writeHead(200);
      res.end(getHTML("index.example.html"));
      return;
    case "/cari":
      res.writeHead(200);
      res.end(getHTML("carimobil.html"));
      return;
    default:
      res.writeHead(200);
      res.end(getHTML("404.html"));
  }
});

server.listen(8000, () => {
  console.log("Server running on port ${8000}");
});
