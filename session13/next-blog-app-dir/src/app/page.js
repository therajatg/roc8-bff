export default async function Home() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return (
      <div>
        {data.map((post) => (
          <p>{post.title}</p>
        ))}
      </div>
    );
  } catch (error) {
    return <div>{error}</div>;
  }
}
