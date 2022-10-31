const express = require("express");
const app = express();

const server = {
  port: 3000,
  host: "localhost"
}

app.listen(server.port);

app.get('/', (req, res) => res.sendFile("./views/index.html", {root: __dirname}));
app.get('/about', (req, res) => res.sendFile("./views/about.html", {root: __dirname}));
app.get('/about-us', (req, res) => res.redirect("/about"));