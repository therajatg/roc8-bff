import { MainLayout } from "@/layouts/MainLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function post() {
  const { query } = useRouter();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);

  useEffect(() => {
    if (query.id) {
      fetch(`http://localhost:3000/api/posts/${query.id}`).then((res) =>
        res.json().then((data) => setPost(data))
      );
      fetch(`http://localhost:3000/api/comments?postId=${query.id}`).then(
        (res) => res.json().then((data) => setComment(data))
      );
    }
  }, [query]);

  return (
    <>
      {post && (
        <div>
          {" "}
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
      <h2>Comments</h2>
      {comment.length
        ? comment.map((each) => (
            <div key={each.id}>
              {each.name}, {each.email} <p>{each.body}</p>
              <hr />
            </div>
          ))
        : null}
    </>
  );
}

post.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
