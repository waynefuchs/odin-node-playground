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
  if(req.url === "/") {
    fs.readFile("./views/index.html", (err, data) => {
      if(err) console.log(err);
      res.end(data);
    });
    return;
  }
  
  // otherwise...
  fs.readFile("./views/404.html", (err, data) => {
    if(err) console.log(err);
    // res.write(data);   // Not required unless writing more than one thing
    res.end(data);
  });
};

const serverPort = 3000;
const serverHost = "localhost";
const server = http.createServer(httpRequest);
server.listen(serverPort, serverHost, httpServerStart);
