import React, { Component } from "react";
import Post from "./Post";

//import "./PostList.css";

import postsDefault from "../assets/posts";

class PostList extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({
      posts: postsDefault
    });
  }

  render() {
    return (
      <ul>
        <p>Teste</p>
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </ul>
    );
  }
}

export default PostList;
