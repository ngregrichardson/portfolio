import React, { Component } from "react";
import { Animated } from "react-animated-css";
import animatedLogo from "../images/logo_animated.svg";

class Home extends Component {
  render() {
    return (
      <div className="content" style={{ zIndex: 0 }}>
        <div className="home-section text-align-right">
          <Animated animationIn="fadeInLeft" isVisible={true}>
            <h1 className="animate slideInRight white filter-shadow">
              Hi, I'm Noah.
            </h1>
            <h2 className="animate slideInRight white filter-shadow">
              I code.
            </h2>
            <button
              className="btn-outline animate slideInRight white filter-shadow"
              onClick={() => {
                this.props.onPageChange("works");
              }}
            >
              See my work
            </button>
          </Animated>
        </div>
        <div className="home-section">
          <Animated
            animationIn="fadeInDown"
            isVisible={true}
            className="logo-wrapper"
          >
            <img
              src={animatedLogo}
              className="logo-lg filter-shadow"
              alt="ngregrichardson-logo"
            />
          </Animated>
        </div>
      </div>
    );
  }
}

export default Home;
