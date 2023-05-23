const express = require("express");
const bodyParser = require("body-parser");
const shortId = require("shortid");
const fs = require("fs");
const urlData = require("./urls.json");
const app = express();

app
  .use(bodyParser.json())
  .get("/:shortUrl", (req, res) => {
    const { shortUrl } = req.params;
    const foundEntry = urlData.find((item) => item.short_url === shortUrl);
    if (foundEntry) res.redirect(foundEntry.original_url);
    else {
      res.send("Entry Not Found");
    }
  })
  .post("/shorten", (req, res) => {
    const foundEntry = urlData.find(
      (item) => item.original_url === req.body.url
    );
    if (foundEntry) res.send(foundEntry);
    else {
      const newEntry = {
        original_url: req.body.url,
        short_url: shortId.generate(),
      };
      urlData.push(newEntry);
      fs.writeFileSync("./urls.json", JSON.stringify(urlData));
      res.send(newEntry);
    }
  })
  .listen(3000, () => console.log("server started"));
