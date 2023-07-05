import { posts } from "@/data/posts";

export default function handler(req, res) {
  try {
    if (req.method === "GET") {
      const { id } = req.query;
      const requiredPost = posts.find((each) => each.id === parseInt(id));
      if (requiredPost === undefined) {
        res.status(400).send("Id not found");
      } else {
        res.status(200).json(requiredPost);
      }
    } else {
      res.status(400).send("Bad Request");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}
