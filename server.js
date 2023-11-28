const http = require("http");
const fs = require("fs");
const path = require("path"); // Added path module

const hostname = "0.0.0.0";
const port = process.env.PORT || 3000; // Updated port to use environment variable

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  let filePath = "./index.html"; // Default to index.html
  const url = req.url;

  if (url === "/sign-up.html") {
    filePath = "./sign-up.html";
  } else if (url === "/login.html") {
    filePath = "./login.html";
  }

  filePath = path.join(__dirname, filePath); // Build absolute path

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
