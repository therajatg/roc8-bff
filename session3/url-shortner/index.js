const express = require("express");
const bodyParser = require("body-parser");
const shortid = require("shortid");
const fs = require("fs");
let urlsData = require("./urls.json");

const app = express();

app.use(bodyParser.json()).post("/shorten", (req, res) => {
  const originalUrl = req.body.url;
  const foundUrl = urlsData.find((item) => item.original_url === originalUrl);
  if (foundUrl) {
    res.send(foundUrl);
  } else {
    const shortUrl = shortid.generate();
    const newUrl = {
      original_url: originalUrl,
      short_url: shortUrl,
    };
    urlsData.push(newUrl);
    fs.writeFileSync("./urls.json", JSON.stringify(urlsData));
    res.send(newUrl);
  }
  res.send("reached");
});

app.get("/:shortUrl", (req, res) => {
  const { shortUrl } = req.params;
  const foundUrl = urlsData.find((item) => item.short_url === shortUrl);
  if (foundUrl) {
    res.redirect(foundUrl.original_url);
  } else {
    res.send({ error: "URL not found" });
  }
});

app.listen(3000, () => console.log("Server Started"));
