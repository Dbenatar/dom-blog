// app/blog/[slug]/page.tsx

import Comments from "@/components/Comments";
import { getPosts, getPostsBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

// this builds all the params for ALL blog posts when the website is deployed
export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = getPostsBySlug(params.slug);

  console.log(post, "this is from the blog page");
  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: post.body.html }}
        className="prose dark:prose-invert"
      ></div>
      {/* @ts-ignore */}
      <Comments postSlug={params.slug} />
    </div>
  );
}
