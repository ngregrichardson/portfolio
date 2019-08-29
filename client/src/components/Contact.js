import React, { Component } from "react";
import { Animated } from "react-animated-css";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    reason: "",
    message: "",
    error: "",
    success: "",
    loading: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ error: "", success: "", loading: true });
    let data = this.state;
    if (data.reason === "") data.reason = "Suggestion";
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => {
        if (res.status === 500) {
          this.setState({
            loading: false,
            error: "There was a problem sending your message.",
            success: ""
          });
          return;
        }
        console.log(res);
        this.setState({
          loading: false,
          success: "Message sent!",
          error: ""
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false,
          error: "There was a problem sending your message.",
          success: ""
        });
      });
  };

  render() {
    return (
      <div className="content">
        <Animated animationIn="fadeInDown" isVisible={true} className="card-lg">
          <div className="card-mg">
            <div className="nav box-shadow">
              <h2 className="nav-item card-title not-a-link">Contact Me</h2>
            </div>
            <form className="card-body" onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Name..."
                onChange={this.handleChange}
                name="name"
                required
              />
              <input
                type="email"
                placeholder="Email..."
                onChange={this.handleChange}
                name="email"
                required
              />
              <select onChange={this.handleChange} name="reason">
                <option>Suggestion</option>
                <option>Comment</option>
                <option>Question</option>
                <option>Collaborate</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Message..."
                onChange={this.handleChange}
                name="message"
                required
              />
              <div className="text-center mb-sm">
                {this.state.loading === true ? (
                  <button type="submit" style={{ display: "inline-block" }}>
                    <span
                      style={{
                        opacity: 0,
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0
                      }}
                    >
                      Send
                    </span>
                    <div className="signal" />
                  </button>
                ) : (
                  <button type="submit">Send</button>
                )}
              </div>
              <p id="error">{this.state.error}</p>
              <p id="success">{this.state.success}</p>
            </form>
          </div>
        </Animated>
      </div>
    );
  }
}

export default Contact;
