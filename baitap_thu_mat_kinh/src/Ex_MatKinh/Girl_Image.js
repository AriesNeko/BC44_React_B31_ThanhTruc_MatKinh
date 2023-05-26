import React, { Component } from "react";
import "./style.css";

export default class Girl_Image extends Component {
  render() {
    let { tryGlass } = this.props;
    return (
      <div className="model text-center">
        <div className="model_glass">
          <img style={{ width: "50%" }} src={tryGlass.url} alt="glass" />
        </div>
        <div style={{ width: "50%" }} className="model_content mx-auto">
          <img
            style={{ width: "50%" }}
            src="./img_glasses/glassesImage/model.jpg"
            alt="girl"
          />
          <div className="model_content-desc text-start text-white ">
            <p className="text-primary fs-6 mb-1">{tryGlass.name}</p>
            <p className="fs-6 m-0">{tryGlass.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
