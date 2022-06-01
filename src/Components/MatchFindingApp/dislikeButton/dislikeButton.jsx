import React, { Component } from "react";
import MatchFindingApp from "../MatchFindingApp";
import "../MatchFindingApp.css";

class DislikeButton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="dislike">
          <div>{this.props.dislikeCounter}</div>
          <button
            id={1}
            className="dislikeButton"
            onClick={this.props.handelDislike}
          >
            dislike
          </button>
        </div>
      </>
    );
  }
}

export default DislikeButton;
