export default async function Comments({ postSlug }: { postSlug: string }) {
  const WEBSTIRE_URL = "http://localhost:3000";

  let comments = [];

  try {
    const commentsResult = await fetch(
      `${WEBSTIRE_URL}/api/comments/${postSlug}`,
      { next: { revalidate: 5 } }
    );
    const response = await commentsResult.json();
    console.log(response);
    comments = response.comments.rows;
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      <h2>Comments</h2>
      <h3>Leave a comment:</h3>

      <form action={`/api/comments/${postSlug}`} method="POST">
        <label htmlFor="username">Name</label>
        <input type="text" name="username" className="text-black" />

        <label htmlFor="comment">Your comment</label>
        <textarea
          name="comment"
          id=""
          cols={30}
          rows={10}
          className="text-black"
        ></textarea>

        <button type="submit">Send comment</button>
      </form>

      <ul>
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
