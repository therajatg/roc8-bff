import Link from "next/link";

export const MainLayout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/new">Create Post</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      {children}
      <b>This is the footer</b>
    </>
  );
};
