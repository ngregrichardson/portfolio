import React, { Component } from "react";

class Background extends Component {
  render() {
    return (
      <div>
        <div id="background" />
        <div className="fog">
          <div className="fog__container">
            <div className="fog__img fog__img--first" />
            <div className="fog__img fog__img--second" />
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
