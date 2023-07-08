export default async function post({ params }) {
  const postRes = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  const post = await postRes.json();

  const commentsRes = await fetch(
    `http://localhost:3000/api/comments/${params.id}`
  );
  const comments = await commentsRes.json();
  console.log(post);
  //   console.log("post", post);
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h1>Comments</h1>
      {comments.map((each) => (
        <p>{each.name}</p>
      ))}
    </>
  );
}
