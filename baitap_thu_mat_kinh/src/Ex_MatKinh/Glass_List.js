import React, { Component } from "react";
import { glassArr } from "./data";
import ItemGlass from "./ItemGlass";

export default class Glass_List extends Component {
  renderGlassList = () => {
    return glassArr.map((glass, index) => {
      return <ItemGlass key={index} data={glass} />;
    });
  };

  render() {
    return (
      <div className="d-flex justify-content-center p-4 bg-light rounded">
        {this.renderGlassList()}
      </div>
    );
  }
}
