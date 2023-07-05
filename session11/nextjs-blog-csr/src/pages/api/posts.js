import { posts } from "@/data/posts";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.status(200).json(posts);
      return;
    case "POST":
      const newPost = { ...req.body, id: posts.length + 1 };
      posts.push(newPost);
      res.status(200).send(newPost);
      return;
    default:
      res.status(404).send("No Data Found");
      return;
  }
}
