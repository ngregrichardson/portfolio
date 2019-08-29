import React, { Component } from "react";
import { Animated } from "react-animated-css";
import github from "../images/github.svg";
class Card extends Component {
  render() {
    var link = "nav-item";
    var githubLink = "nav-item sm-link";
    if (this.props.link === undefined || this.props.link === "") {
      link += " not-a-link";
    }
    if (this.props.githubLink === undefined || this.props.githubLink === "") {
      githubLink += " hide";
    }
    return (
      <Animated animationIn="fadeInDown" isVisible={true} className="card">
        <div className="card-mg">
          <div className="nav box-shadow">
            <div className="nav-items header">
              <a
                href={this.props.link}
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                <h3>{this.props.title}</h3>
              </a>
            </div>
            <div>
              <a
                className={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.githubLink}
              >
                <img className="sm-icon" src={github} alt="github-logo" />
              </a>
            </div>
          </div>
          <p className="card-body">{this.props.body}</p>
        </div>
      </Animated>
    );
  }
}

export default Card;
