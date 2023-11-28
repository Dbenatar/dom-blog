import { allPosts } from "contentlayer/generated";

export function getPosts() {
  return allPosts;
}

export function getPostsBySlug(slug: string) {
  return getPosts().find((post) => post.slug == slug);
}
