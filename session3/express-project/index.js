const express = require("express");
const app = express();

const myLoggingMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  //   res.send("end");
  next();
};

const crashHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.send("Internal Server Error");
};

app
  .use(express.static("public"))
  .get("/", (req, res) => {
    res.send("Hello World");
  })
  .get("/about", myLoggingMiddleware, (req, res) => {
    throw Error("Can't visit the page");
    res.send("About Page");
  })
  .use(crashHandler)
  .listen(3000, () => console.log("Server Started"));

//express.static and the crashHandler middleware both are provided by express.
//The only difference between the normal middleware and crashHandler middleware is that the crashHandler middleware takes in 4 arguments instead of 3.
