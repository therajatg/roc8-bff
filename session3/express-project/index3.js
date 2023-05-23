const express = require("express");
const app = express();

const myLoggingMiddleware = (req, res, next) => {
  console.log(`${req.method} - ${req.originalUrl}`);
  next();
};

const crashHandler = (err, req, res, next) => {
  if (err) console.log(err.stack);
  res.send("Internal Server Error");
  next();
};

app
  .use(express.static("public"))
  .get("/", (req, res) => {
    res.send("Hello World");
  })
  .use(myLoggingMiddleware)
  .get("/about", (req, res) => {
    throw Error("some error");
    res.send("About Page");
  })
  .use(crashHandler)
  .get("/contact", (req, res) => {
    throw Error("some error");
    res.send("Contact Page");
  })

  .listen(3000, () => console.log("Server Started"));
