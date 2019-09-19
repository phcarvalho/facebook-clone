import React from "react";

import profile from "../assets/Profile.png";

function PostHeader({ author, date }) {
  return (
    <div className="postHeader">
      <img className="avatar" src={profile} />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function Post({ content }) {
  return (
    <div className="postContent">
      <p>{content}</p>
    </div>
  );
}

function Comment({ data }) {
  return (
    <div className="postComment">
      <p>{data.content}</p>
    </div>
  );
}

function PostItem({ data }) {
  return (
    <div className="postItem">
      <PostHeader author={data.author} date={data.date} />
      <Post content={data.content} />
      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
}

export default PostItem;
