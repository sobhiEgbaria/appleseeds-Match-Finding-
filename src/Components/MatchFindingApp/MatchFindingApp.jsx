import React, { Component } from "react";
import "./MatchFindingApp.css";
import LikeButton from "./likeButton/likeButton";
import DislikeButton from "./dislikeButton/dislikeButton";
import StartButton from "./startButton/startButton";

import start from "../img/start.jpg";
import dontLovePet from "../img/dontLovePet.jpg";
import lovePet from "../img/lovePet.jpg";
import template1 from "../img/template1.jpg";
import template2 from "../img/template2.jpg";
import template3 from "../img/template3.jpg";
import template4 from "../img/template4.jpg";
import template5 from "../img/template5.jpg";
import template6 from "../img/template6.jpg";
import template7 from "../img/template7.jpg";
import template8 from "../img/template8.jpg";
import template9 from "../img/template9.jpg";
import template10 from "../img/template10.jpg";
import template11 from "../img/template11.jpg";

class MatchFindingApp extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    img: [
      {
        img: start,
      },
      {
        img: template1,

        description:
          "Flamingos usually stand on one leg with the other tucked beneath the body",
      },
      {
        img: template2,

        description: "dog: something between the cat and the wolf",
      },
      {
        img: template3,

        description: "Meerkat: Timon from lion king",
      },
      {
        img: template4,

        description: "The lion king by himself",
      },
      {
        img: template5,

        description: "if you are a pet fan you will know",
      },
      {
        img: template6,

        description: "Damn all the jellyfish - Monica Geller ",
      },
      {
        img: template7,

        description: "ninja turtles ",
      },
      {
        img: template8,

        description:
          "Bears are carnivoran mammals of the family Ursidae - wiki-",
      },
      {
        img: template9,

        description: "a small version of the great mammoth",
      },
      {
        img: template10,

        description: "Fox always have a sale",
      },
      {
        img: template11,

        description: "Giiiiiiiiiiiiiiiiiiraffe",
      },
      {
        img: lovePet,
      },
      {
        img: dontLovePet,
      },
    ],

    imgIndex: 0,
    dislikeCounter: 0,
    likeCounter: 0,
  };

  handelStart = () => {
    if (this.state.imgIndex == 0)
      this.setState({ imgIndex: this.state.imgIndex + 1 });
  };

  handelLike = () => {
    if (this.state.imgIndex > 0 && this.state.imgIndex <= 10) {
      this.setState({
        imgIndex: this.state.imgIndex + 1,
        likeCounter: this.state.likeCounter + 1,
      });
    } else if (this.state.imgIndex == 11) this.finalScreen();
  };

  handelDislike = () => {
    console.log(this.state.imgIndex);
    if (this.state.imgIndex > 0 && this.state.imgIndex <= 10) {
      this.setState({
        imgIndex: this.state.imgIndex + 1,
        dislikeCounter: this.state.dislikeCounter + 1,
      });
    } else if (this.state.imgIndex == 11) this.finalScreen();
  };

  finalScreen = () => {
    if (this.state.likeCounter > this.state.dislikeCounter)
      this.setState({ imgIndex: 12 });
    else this.setState({ imgIndex: 13 });
  };

  render() {
    return (
      <>
        <div className="container">
          <LikeButton
            handelLike={this.handelLike}
            likeCounter={this.state.likeCounter}
          />

          <StartButton
            img={this.state.img}
            imgIndex={this.state.imgIndex}
            handelStart={this.handelStart}
          />

          <DislikeButton
            dislikeCounter={this.state.dislikeCounter}
            handelDislike={this.handelDislike}
          />
        </div>
      </>
    );
  }
}

export default MatchFindingApp;
