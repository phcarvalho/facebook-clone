import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Paulo Carvalho",
          avatar: "URL da imagem"
        },
        date: "04 Jun 2019",
        content: "Este é um post de teste",
        comments: [
          {
            id: 1,
            author: {
              name: "Paulo Carvalho",
              avatar: "URL da imagem"
            },
            content: "Este é um comentário de teste"
          },
          {
            id: 2,
            author: {
              name: "Paulo Carvalho",
              avatar: "URL da imagem"
            },
            content: "Este é um comentário de teste"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Paulo Carvalho",
          avatar: "URL da imagem"
        },
        date: "04 Jun 2019",
        content: "Este é um post de teste",
        comments: [
          {
            id: 1,
            author: {
              name: "Paulo Carvalho",
              avatar: "URL da imagem"
            },
            content: "Este é um comentário de teste"
          },
          {
            id: 2,
            author: {
              name: "Paulo Carvalho",
              avatar: "URL da imagem"
            },
            content: "Este é um comentário de teste"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <ul>
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </ul>
    );
  }
}

export default PostList;
