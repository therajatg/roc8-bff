import Link from "next/link";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  return (
    <div>
      {data.map((post) => (
        <>
          <p>{post.title}</p>
          <button>
            <Link href={`/${post.id}`}>Comments</Link>
          </button>
        </>
      ))}
    </div>
  );
}
