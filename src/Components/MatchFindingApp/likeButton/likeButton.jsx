import React, { Component } from "react";
import MatchFindingApp from "../MatchFindingApp";
import "../MatchFindingApp.css";
import "./likeButton.css";

class LikeButton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="like">
          <div>{this.props.likeCounter}</div>
          <button id={1} className="likeButton" onClick={this.props.handelLike}>
            like
          </button>
        </div>
      </>
    );
  }
}

export default LikeButton;
