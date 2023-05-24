import React, { Component } from "react";
import Girl_Image from "./Girl_Image";
import Glass_List from "./Glass_List";

export default class Content extends Component {
  render() {
    return (
      <div className="container">
        <div className="my-5">
          <Girl_Image />
        </div>
        <div className="">
          <Glass_List />
        </div>
      </div>
    );
  }
}
