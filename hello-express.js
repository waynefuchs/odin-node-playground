const express = require("express");
const app = express();
const port = 3000;

// Serve all static files in the project's public folder
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello World!");
  console.log("Routed '/'");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
