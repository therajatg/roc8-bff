const express = require("express");
const app = express();

const myLoggingMiddleware = (req, res, next) => {
  console.log(`${req.method} - ${req.originalUrl}`);
  res.send("END");
  next();
};

app
  .get("/", (req, res) => {
    res.send("Hello World");
  })
  .use(myLoggingMiddleware)
  .get("/about", (req, res) => {
    res.send("About Page");
  })
  .get("/contact", (req, res) => {
    res.send("Contact Page");
  })

  .listen(3000, () => console.log("Server Started"));
