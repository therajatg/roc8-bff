const express = require("express");
const axios = require("axios");

const app = express();

const fetchGitHubActivity = async (username) => {
  const url = `https://api.github.com/users/${username}/events/public`;
  const response = await axios.get(url);
  return response.data;
};

app
  .get("/", async (req, res) => {
    const activity = await fetchGitHubActivity("therajatg");
    res.send(activity);
  })
  .listen(3000, console.log("server started"));
