const fs = require("fs");
const { stat } = require("fs/promises");
const http = require("http");

const httpServerStart = () => {
  console.log("Server started listening");
};

const httpRequest = (req, res) => {
  if (req.url === "/favicon.ico") return;

  // Send html header
  console.log(`request made: ${req.url}`);
  res.setHeader("Content-type", "text/html");

  // Check for '/' route
  let statusCode = 200;
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/redirect":
      res.statusCode = 301;
      res.setHeader('Location', '/');
      res.end();
      return;
    default:
      statusCode = 404;
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    res.statusCode = statusCode;
    res.end(data);
  });
};

const serverPort = 3000;
const serverHost = "localhost";
const server = http.createServer(httpRequest);
server.listen(serverPort, serverHost, httpServerStart);
