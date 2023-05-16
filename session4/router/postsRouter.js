const express = require("express");
const posts = require("../data/posts.json");
const comments = require("../data/comments.json");
const fs = require("fs");

const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
  res.json(posts);
});

postsRouter.get("/:id", (req, res) => {
  const requiredPost = posts.find(
    (item) => item.id === parseInt(req.params.id)
  );
  if (requiredPost) res.json(requiredPost);
  else {
    res.status(404).send("Post Not Found!");
  }
});

postsRouter.post("/", (req, res) => {
  const { userId, title, body } = req.body;
  if (!userId || !title || !body) {
    res.status(400).send("Missing Required Fields");
  } else {
    const newPost = {
      userId,
      title,
      body,
      id: posts.length + 1,
    };
    posts.push(newPost);
    fs.writeFileSync(
      path.resolve(__dirname, "../data/posts.json"),
      JSON.stringify(posts)
    );
    res.json(newPost);
  }
});

postsRouter.get("/:id/comments", (req, res) => {
  const requiredComments = comments.filter(
    (item) => item.postId === parseInt(req.params.id)
  );
  //Here we do not have the if else because we used the filter here instead of find and therefore if no comments found, it'll simply send an empty array.
  res.json(requiredComments);
});

module.exports = { postsRouter };
