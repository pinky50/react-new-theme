import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./SlideImage.css"

export default function SlideImage() {
  return (
    <div className="container">
      <OwlCarousel className="owl-theme mt-5 mb-5"
          items={5}
          loop={true}
          nav={true}
          autoplay={true}
          dots={true}
          margin={10}
          >
          <div className="single-logo">
            <img src="images/clients/bhcs.png" alt="" />
          </div>
          <div className="single-logo">
            <img src="images/clients/bhcs.png" alt="" />
          </div>
          <div className="single-logo">
            <img src="../../images/clients/edbl.png" alt="" />
          </div>
          <div className="single-logo">
            <img src="../../images/clients/bhcs.png" alt="" />
          </div>
          <div className="single-logo">
            <img src="../../images/clients/edbl.png" alt="" />
          </div>
        </OwlCarousel>
      </div>
  )
}
