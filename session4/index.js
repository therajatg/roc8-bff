const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { postsRouter } = require("./router/postsRouter");
const { commentsRouter } = require("./router/commentsRouter");

app.use(bodyParser.json());
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);
app.listen(3000, () => console.log("Server Started"));
