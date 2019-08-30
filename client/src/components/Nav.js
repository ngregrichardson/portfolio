import React, { Component } from "react";
import { Animated } from "react-animated-css";
import logo from "../images/logo.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";
import github from "../images/github.svg";
import discord from "../images/discord.svg";

class Nav extends Component {
  render() {
    var home = "nav-item";
    var works = "nav-item";
    var contact = "nav-item";
    if (this.props.current === "home") {
      home += " current";
    } else if (this.props.current === "works") {
      works += " current";
    } else if (this.props.current === "contact") {
      contact += " current";
    }
    return (
      <Animated
        animationIn="fadeInDown"
        isVisible={true}
        style={{ zIndex: 1, position: "sticky", top: "0px" }}
      >
        <i
          height="30px"
          width="30px"
          id="toggle-mobile-menu"
          className="closed drop-shadow"
          style={{
            position: "fixed"
          }}
        ></i>
        <div className="nav drop-shadow" id="nav">
          <div className="brand">
            <img src={logo} className="brand-logo" alt="ngregrichardson-logo" />
            <h4 className="nav-logo nav-px">ngregrichardson</h4>
          </div>
          <div className="nav-items">
            <button
              className={home}
              onClick={() => {
                this.props.onPageChange("home");
              }}
            >
              Home
            </button>
            <button
              className={works}
              onClick={() => {
                this.props.onPageChange("works");
              }}
            >
              My Works
            </button>
            <button
              className={contact}
              onClick={() => {
                this.props.onPageChange("contact");
              }}
            >
              Contact Me
            </button>
          </div>
          <div className="sm-items">
            <a
              className="nav-item sm-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ngregrichardson"
            >
              <img className="sm-icon" src={twitter} alt="twitter-logo" />
            </a>
            <a
              className="nav-item sm-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCUB_cxZFm_72B5AVvZpJpYg"
            >
              <img className="sm-icon" src={youtube} alt="youtube-logo" />
            </a>
            <a
              className="nav-item sm-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ngregrichardson"
            >
              <img className="sm-icon" src={github} alt="github-logo" />
            </a>
            <a
              className="nav-item sm-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/6UczS4X"
            >
              <img className="sm-icon" src={discord} alt="discord-logo" />
            </a>
          </div>
        </div>
      </Animated>
    );
  }
}

export default Nav;
