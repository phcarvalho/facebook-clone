import React from "react";
import Comment from "./Comment";

//import "./Post.css";

function Post({ data }) {
  return (
    <li>
      {data.content}
      <ul>
        {data.comments.map(comment => {
          <Comment key={comment.id} data={comment} />;
        })}
      </ul>
    </li>
  );
}

export default Post;
