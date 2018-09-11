import React, { Component } from "react";

import "./Search.css";

import SearchIcon from "react-icons/lib/md/search";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: ""
    };

    this.searchStart = this.searchStart.bind(this);
  }

  handleChange(e) {
    this.setState({ userInput: e });
    console.log(this.state.userInput);
  }

  searchStart() {
    console.log(this.props);

    let { userInput } = this.state;

    this.props.searchFn(userInput);
  }

  render() {
    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input
            placeholder="Search Your Feed"
            onChange={e => {
              this.handleChange(e.target.value);
            }}
          />

          <SearchIcon id="Search__icon" onClick={this.searchStart} />
        </div>
      </section>
    );
  }
}
