import { WEB_SITE } from "config";
import { CommentForm } from "./CommentForm";

export default async function Comments({ postSlug }: { postSlug: string }) {
  let comments = [];

  try {
    const commentsResult = await fetch(`${WEB_SITE}/api/comments/${postSlug}`, {
      next: { revalidate: 5 },
    });
    const response = await commentsResult.json();
    console.log(response);
    comments = response.comments.rows;
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="flex flex-col items-center  p-24">
      <CommentForm postSlug={postSlug} />
      <h2>Comments</h2>
      <h3>Leave a comment:</h3>

      <ul>
        {/* @ts-ignore */}
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              {comment.username} says...
              <br />
              {comment.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
