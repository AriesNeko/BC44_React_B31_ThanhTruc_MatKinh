import React, { Component } from "react";
import "./style.css";

export default class Glass_List extends Component {
  renderGlassList = () => {
    let { dataGlass, active, changeGlass } = this.props;
    return dataGlass.map((item) => {
      return (
        <div className="card" key={item.id} data={item}>
          <img
            onClick={() => {
              changeGlass(item.id);
            }}
            className={active === item.id ? "glass-active" : "glass"}
            style={{ width: 100, cursor: "pointer" }}
            src={item.url}
            alt="glass"
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="d-flex justify-content-center p-4 bg-white rounded">
        {this.renderGlassList()}
      </div>
    );
  }
}
