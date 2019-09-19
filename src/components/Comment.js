import React from "react";
//import "./Comment.css";

function Comment({ data }) {
  return <li>{data.content}</li>;
}

export default Comment;
