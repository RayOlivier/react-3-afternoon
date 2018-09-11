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
      console.log("res: ", res);
      this.setState({ posts: res.data });
      console.log(this.state);
    });
  }

  updatePost() {}

  deletePost() {}

  createPost() {}

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">
          <Compose />
          {posts.map(e => {
            return <Post key={e.id} />;
          })}
        </section>
      </div>
    );
  }
}

export default App;
