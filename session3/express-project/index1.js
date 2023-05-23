const express = require("express");
const app = express();

app
  .get("/", (req, res) => {
    res.send("Hello World");
  })
  .get("/about", (req, res) => {
    res.send("About Page");
  })
  .post("/about", (req, res) => {
    res.send("post at about page");
  })
  .listen(3000, () => console.log("Server Started"));
