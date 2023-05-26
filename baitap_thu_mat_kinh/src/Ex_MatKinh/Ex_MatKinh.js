import React, { Component } from "react";
import Header from "./Header";
import { glassArr } from "./data";
import Girl_Image from "./Girl_Image";
import Glass_List from "./Glass_List";

export default class Ex_MatKinh extends Component {
  state = {
    glassArr: glassArr,
    glass: glassArr[0],
    choose: 1,
  };

  handleChangeGlass = (id) => {
    this.setState({
      glass: this.state.glassArr[id - 1],
      choose: id,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Girl_Image tryGlass={this.state.glass} />
        <div className="container my-5">
          <Glass_List
            active={this.state.choose}
            changeGlass={this.handleChangeGlass}
            dataGlass={this.state.glassArr}
          />
        </div>
      </div>
    );
  }
}
