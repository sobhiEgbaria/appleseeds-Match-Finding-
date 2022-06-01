import React, { Component } from "react";
import MatchFindingApp from "../MatchFindingApp";
import "../MatchFindingApp.css";

class StartButton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="img">
          <img src={this.props.img[this.props.imgIndex].img}></img>
          <h4>{this.props.img[this.props.imgIndex].description}</h4>
          <button className="start" onClick={this.props.handelStart}>
            S T A R T
          </button>
        </div>
      </>
    );
  }
}

export default StartButton;
