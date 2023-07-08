export default function newPost() {
  async function createPost(data) {
    "use server";
    const title = data.get("title");
    const body = data.get("body");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    console.log({ json });
  }

  return (
    <>
      <form action={createPost}>
        <input type="text" name="title" placeholder="Title" />
        <br />
        <textarea name="body" placeholder="Body" />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
