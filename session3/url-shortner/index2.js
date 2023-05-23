const express = require("express");
const bodyParser = require("body-parser");
const shortId = require("shortid");
const fs = require("fs");
const urlData = require("./urls.json");
const app = express();

app
  .use(bodyParser.json())
  .get("/shortcut", (req, res) => {
    // Your code for the "/shortcut" GET route
  })
  .post("/shorten", (req, res) => {
    if (urlData[req.body.url])
      res.send({
        original_url: req.body.url,
        short_url: urlData[req.body.url],
      });
    else {
      urlData[req.body.url] = shortId.generate();
      fs.writeFileSync("./urls.json", JSON.stringify(urlData));
      res.send({
        original_url: req.body.url,
        short_url: urlData[req.body.url],
      });
    }
  })
  .listen(3000, () => console.log("server started"));
