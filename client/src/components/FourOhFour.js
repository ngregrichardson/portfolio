import React, { Component } from "react";
import Card from "./Card";

class FourOhFour extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row mt-break-sm">
          <div className="col text-center">
            <Card title="404 | Sorry, we couldn't find that..." />
          </div>
        </div>
      </div>
    );
  }
}

export default FourOhFour;
