import React from "react";
//import "./Comment.css";

function Comment({ key, comment }) {
  return (
    <li key={key}>
      <p>{comment.content}</p>
    </li>
  );
}

export default Comment;
