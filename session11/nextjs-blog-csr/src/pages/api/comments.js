import { comments } from "@/data/comments";

export default function handler(req, res) {
  const { postId } = req.query;
  try {
    if (req.method === "GET") {
      const commentsRelatedToPost = comments.filter(
        (each) => each.postId === parseInt(postId)
      );
      if (commentsRelatedToPost === undefined) {
        res.status(400).send("No comments found");
      } else {
        res.status(200).json(commentsRelatedToPost);
      }
    } else {
      res.status(400).send("Bad Request");
    }
    return;
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
