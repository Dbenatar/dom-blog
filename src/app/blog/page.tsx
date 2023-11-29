import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default function Page() {
  const posts = getPosts();

  return (
    <div>
      <h2 className="py-20 flex space-x-8 text-center">My posts: </h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
      <Link href="/">Go Home</Link>
    </div>
  );
}
