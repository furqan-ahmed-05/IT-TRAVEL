import React from "react";
import Form from "./Form";
import Carousel from "./Carousel";
import "./Banner.css";

function Banner() {
  return (
    <div className="section-width">
    <div className="section-padding">
      <div className="banner">
        <Carousel />
        <Form />
      </div>
    </div>
    </div>
  );
}

export default Banner;
