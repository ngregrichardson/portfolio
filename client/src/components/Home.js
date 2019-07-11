import React, { Component } from "react";
import { Animated } from "react-animated-css";
import animatedLogo from "../images/logo_animated.svg";

class Home extends Component {
  render() {
    return (
      <div className="row mt-break">
        <div className="col text-align-right">
          <Animated animationIn="fadeInLeft" isVisible={true}>
            <h1 className="animate slideInRight white filter-shadow">
              Hi, I'm Noah.
            </h1>
            <h2 className="animate slideInRight white filter-shadow">
              I code.
            </h2>
            <button
              className="outline animate slideInRight white filter-shadow"
              onClick={() => {
                this.props.onPageChange("works");
              }}
            >
              See my work
            </button>
          </Animated>
        </div>
        <div className="col text-align-left">
          <Animated animationIn="fadeInDown" isVisible={true}>
            <img
              src={animatedLogo}
              width="300px"
              height="300px"
              className="filter-shadow"
              alt="ngregrichardson-logo"
            />
          </Animated>
        </div>
      </div>
    );
  }
}

export default Home;
