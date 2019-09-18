import React from "react";
import Comment from "./Comment";

//import "./Post.css";

function Post({ key, data }) {
  return (
    <li key={key}>
      <p>{data.content}</p>
      <ul>
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </ul>
    </li>
  );
}

export default Post;
