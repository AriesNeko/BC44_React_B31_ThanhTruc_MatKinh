import React, { Component } from "react";
import "./style.css";

export default class ItemGlass extends Component {
  render() {
    let glass = this.props.data;
    return (
      <div className="card p-2">
        <img
          className="m-1"
          style={{ width: "100%", height: "100%", cursor: "pointer" }}
          src={glass.url}
          alt="glass"
        />
      </div>
    );
  }
}
