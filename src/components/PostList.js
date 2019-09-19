import React, { Component } from "react";
import PostItem from "./PostItem";

import posts from "../assets/posts";

class PostList extends Component {
  state = {
    posts
  };

  render() {
    return (
      <div className="postList">
        {this.state.posts.map(post => (
          <PostItem key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
