import React, { Component } from "react";
import Card from "./Card";

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
    this.setState({ loading: true });
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
      <div>
        <div className="row mt-break-sm">
          <div className="col text-center">
            <Card
              title="Contact Me"
              form={true}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              error={this.state.error}
              success={this.state.success}
              loading={this.state.loading}
              body="Team Tracker is a new way to watch FIRST Robotics Competitions. With many different worldwide events every weekend, watching all of the teams you like can be tough. Team Tracker provides a way to track every team you want to as if they are all at one event."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
