const fs = require("fs");
const http = require("http");

const httpServerStart = () => {
  console.log("Server started listening");
};

const httpRequest = (req, res) => {
  if(req.url === "/favicon.ico") return;

  // Send html header
  console.log(`request made: ${req.url}`);
  res.setHeader("Content-type", "text/html");

  // Check for '/' route
  let path = "./views/";
  switch(req.url) {
    case "/":
      path += 'index.html';
      break;
    case "/about":
      path += 'about.html';
      break;
    default:
      path += '404.html'
      break;
  }

  fs.readFile(path, (err, data) => {
    if(err) console.log(err);
    res.end(data);
  });
  
};

const serverPort = 3000;
const serverHost = "localhost";
const server = http.createServer(httpRequest);
server.listen(serverPort, serverHost, httpServerStart);
