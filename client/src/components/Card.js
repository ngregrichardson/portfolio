import React, { Component } from "react";
import { Animated } from "react-animated-css";
import github from "../images/github.svg";
class Card extends Component {
  render() {
    if (this.props.form === undefined || this.props.form === false) {
      var link = "nav-item card-title nav-px";
      var githubLink = "nav-item sm-link card-header-icon";
      if (this.props.link === undefined || this.props.link === "") {
        link += " not-a-link";
      }
      if (this.props.githubLink === undefined || this.props.githubLink === "") {
        githubLink += " hide";
      }
      return (
        <Animated animationIn="fadeInDown" isVisible={true}>
          <div className="card">
            <div className="nav box-shadow">
              <a
                href={this.props.link}
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                {this.props.title}
              </a>
              <div className="col right">
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
    } else {
      if (this.props.loading) {
        return (
          <Animated animationIn="fadeInDown" isVisible={true}>
            <div className="card">
              <div className="nav box-shadow">
                <button className="nav-item card-title nav-px not-a-link">
                  {this.props.title}
                </button>
              </div>
              <form className="card-body" onSubmit={this.props.onSubmit}>
                Name *
                <input
                  type="text"
                  placeholder="Name..."
                  onChange={this.props.onChange}
                  name="name"
                  required
                />
                Email *
                <input
                  type="email"
                  placeholder="Email..."
                  onChange={this.props.onChange}
                  name="email"
                  required
                />
                Reason *
                <select onChange={this.props.onChange} name="reason">
                  <option>Suggestion</option>
                  <option>Comment</option>
                  <option>Question</option>
                  <option>Collaborate</option>
                  <option>Other</option>
                </select>
                Message *
                <textarea
                  placeholder="Message..."
                  onChange={this.props.onChange}
                  name="message"
                  required
                />
                <div className="text-center mb-sm">
                  <button type="submit" style={{ display: "inline-block" }}>
                    <div className="signal" />
                  </button>
                </div>
                <p id="error">{this.props.error}</p>
                <p id="success">{this.props.success}</p>
              </form>
            </div>
          </Animated>
        );
      }
      return (
        <Animated animationIn="fadeInDown" isVisible={true}>
          <div className="card">
            <div className="nav box-shadow">
              <button className="nav-item card-title nav-px not-a-link">
                {this.props.title}
              </button>
            </div>
            <form className="card-body" onSubmit={this.props.onSubmit}>
              Name *
              <input
                type="text"
                placeholder="Name..."
                onChange={this.props.onChange}
                name="name"
                required
              />
              Email *
              <input
                type="email"
                placeholder="Email..."
                onChange={this.props.onChange}
                name="email"
                required
              />
              Reason *
              <select onChange={this.props.onChange} name="reason">
                <option>Suggestion</option>
                <option>Comment</option>
                <option>Question</option>
                <option>Collaborate</option>
                <option>Other</option>
              </select>
              Message *
              <textarea
                placeholder="Message..."
                onChange={this.props.onChange}
                name="message"
                required
              />
              <div className="text-center mb-sm">
                <button type="submit">Send</button>
              </div>
              <p id="error">{this.props.error}</p>
              <p id="success">{this.props.success}</p>
            </form>
          </div>
        </Animated>
      );
    }
  }
}

export default Card;
