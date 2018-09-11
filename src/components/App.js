import React, { Component } from "react";

import "./App.css";

import Post from "./Post/Post";
import Header from "./Header/Header";
import Compose from "./Compose/Compose";
import axios from "axios";

const BASE_URL = "https://practiceapi.devmountain.com/api";

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  componentDidMount() {
    axios.get(BASE_URL + "/posts").then(res => {
      console.log("res: ", res.data);
      this.setState({ posts: res.data });
      //console.log(this.state);
    });
  }

  updatePost(id, text) {
    axios.put(`${BASE_URL}/posts?id=${id}`, { text }).then(res => {
      //console.log("res: ", res);
      this.setState({ posts: res.data });
    });
  }

  deletePost(id) {
    axios.delete(`${BASE_URL}/posts?id=${id}`).then(res => {
      //console.log("res: ", res);
      this.setState({ posts: res.data });
    });
  }

  createPost(text) {
    axios.post(`${BASE_URL}/posts`, { text }).then(res => {
      //console.log("res: ", res);
      this.setState({ posts: res.data });
    });
  }

  render() {
    const { posts } = this.state;
    //console.log("POSTS: ", posts);

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">
          <Compose createPostFn={this.createPost} />
          {posts.map(e => {
            return (
              <Post
                key={e.id}
                text={e.text}
                date={e.date}
                id={e.id}
                updatePostFn={this.updatePost}
                deletePostFn={this.deletePost}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
