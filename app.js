const express = require("express");
const app = express();

const server = {
  port: 3000,
  host: "localhost"
}

app.listen(server.port);

// Add routes
// Routes are checked one at a time, sequentially until matched
app.get('/', (req, res) => res.sendFile("./views/index.html", {root: __dirname}));
app.get('/about', (req, res) => res.sendFile("./views/about.html", {root: __dirname}));
app.get('/about-us', (req, res) => res.redirect("/about"));

// `app.use()` is a catch-all
// No matches were found, send a 404 page
// Notice the status() chaining [nice]
app.use((req, res) => res.status(404).sendFile("./views/404.html", {root: __dirname}));

// This will never get reached, because `app.use` consumes the route
app.get('/hiddenurl', (req, res) => res.redirect("/"));