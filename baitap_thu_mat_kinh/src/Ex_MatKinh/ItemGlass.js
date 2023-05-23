import React, { Component } from "react";

export default class ItemGlass extends Component {
  render() {
    let glass = this.props.data;
    return (
      <div className="p-2">
        <img
          className="m-1"
          style={{ width: "100%", height: "100%" }}
          src={glass.url}
          alt="glass"
        />
      </div>
    );
  }
}
