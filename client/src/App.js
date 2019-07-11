import React, { Component } from "react";
import Nav from "./components/Nav";
import Background from "./components/Background";

import Home from "./components/Home";
import Works from "./components/Works";
import Contact from "./components/Contact";
import FourOhFour from "./components/FourOhFour";
const pages = ["", "home", "works", "contact", "fourohfour"];

class App extends Component {
  state = {
    page: "home"
  };

  handlePageChange = page => {
    window.history.pushState("", page, `/${page}`);
    document.title = `${page.charAt(0).toUpperCase() +
      page.substring(1)} | ngregrichardson`;
    this.setState({ page });
  };

  componentWillMount = () => {
    let url = window.location.href;
    let splitUrl = url.split("/");
    if (splitUrl[splitUrl.length - 1].toLowerCase() !== this.state.page) {
      if (pages.includes(splitUrl[splitUrl.length - 1].toLowerCase())) {
        this.setState({
          page: splitUrl[splitUrl.length - 1].toLowerCase()
        });
        if (
          splitUrl[splitUrl.length - 1].toLowerCase() === "home" ||
          splitUrl[splitUrl.length - 1].toLowerCase() === ""
        ) {
          document.title = "Home | ngregrichardson";
        } else if (
          splitUrl[splitUrl.length - 1].toLowerCase() === "fourohfour"
        ) {
          document.title = "404 | ngregrichardson";
        } else {
          document.title = `${splitUrl[splitUrl.length - 1]
            .toLowerCase()
            .charAt(0)
            .toUpperCase() +
            splitUrl[splitUrl.length - 1]
              .toLowerCase()
              .substring(1)} | ngregrichardson`;
        }
      } else {
        window.history.pushState("", "fourohfour", `/fourohfour`);
        this.setState({ page: "fourohfour" });
        document.title = "404 | ngregrichardson";
      }
    }
  };

  render() {
    if (this.state.page === "works") {
      return (
        <div>
          <Nav current="works" onPageChange={this.handlePageChange} />
          <Background />
          <Works />
        </div>
      );
    } else if (this.state.page === "contact") {
      return (
        <div>
          <Nav current="contact" onPageChange={this.handlePageChange} />
          <Background />
          <Contact />
        </div>
      );
    } else if (this.state.page === "home" || this.state.page === "") {
      return (
        <div>
          <Nav current="home" onPageChange={this.handlePageChange} />
          <Background />
          <Home onPageChange={this.handlePageChange} />
        </div>
      );
    } else {
      return (
        <div>
          <Nav onPageChange={this.handlePageChange} />
          <Background />
          <FourOhFour />
        </div>
      );
    }
  }
}

export default App;
