const express = require("express");
const comments = require("../data/comments.json");

const commentsRouter = express.Router();

commentsRouter
  .get("/", (req, res) => {
    res.json(comments);
  })
  .get("/findByEmail/:email", (req, res) => {
    const requiredComments = comments.filter(
      (item) => item.email === req.params.email
    );
    res.json(requiredComments);
  });

module.exports = { commentsRouter };
