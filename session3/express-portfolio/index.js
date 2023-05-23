const express = require("express");
const axios = require("axios");
const { engine } = require("express-handlebars");

const app = express();

const fetchGitHubActivity = async (username) => {
  const url = `https://api.github.com/users/${username}/events/public`;
  const response = await axios.get(url);
  return response.data;
};

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app
  .get("/", async (req, res) => {
    const activities = await fetchGitHubActivity("therajatg");
    res.render("home", {
      title: "My Portfolio",
      activities,
    });
    // res.setHeader("content-type", "text/html");
    // res.send(
    //   `
    //   <h1>My Github Portfolio</h1>
    //   <pre>
    //   ${JSON.stringify(activity)}
    //   </pre>`
    // );
  })
  .listen(3000, console.log("server started"));
