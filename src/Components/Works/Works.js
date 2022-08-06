import React from "react";
import image1 from "../../images/projectImg/project1.jpeg";
import image2 from "../../images/projectImg/project2.jpeg";
import image3 from "../../images/projectImg/project3.jpeg";
import image4 from "../../images/projectImg/project4.jpeg";
import image5 from "../../images/projectImg/project5.jpeg";
import image6 from "../../images/projectImg/project6.jpeg";
import "./Works.css";

export default function Works() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="portfolio-wrapper">
            {" "}
            <a href="https://www.noboit.com/">
              <div className="portfolio-img">
                <img src={image1} alt="portfolio-img" className="image" />
              </div>
            </a>
            <h5 className="project-name text-center mt-3 pb-3">Nobo It</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  mb-4">
          <div className="portfolio-wrapper">
            {" "}
            <a href="https://www.noboit.com/">
              <div className="portfolio-img">
                <img src={image2} alt="portfolio-img" className="image" />
              </div>
            </a>
            <h5 className="project-name text-center mt-3 pb-3">Sultan It</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="portfolio-wrapper">
            {" "}
            <a href="https://www.noboit.com/">
              <div className="portfolio-img">
                <img src={image3} alt="portfolio-img" className="image" />
              </div>
            </a>
            <h5 className="project-name text-center mt-3 pb-3">Pink It</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="portfolio-wrapper">
            {" "}
            <a href="https://www.noboit.com/">
              <div className="portfolio-img">
                <img src={image4} alt="portfolio-img" className="image" />
              </div>
            </a>
            <h5 className="project-name text-center mt-3 pb-3">Saros It</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="portfolio-wrapper">
            {" "}
            <a href="https://www.noboit.com/">
              <div className="portfolio-img">
                <img src={image5} alt="portfolio-img" className="image" />
              </div>
            </a>
            <h5 className="project-name text-center mt-3 pb-3">Nobo It</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="portfolio-wrapper">
            {" "}
            <a href="https://www.noboit.com/">
              <div className="portfolio-img">
                <img src={image6} alt="portfolio-img" className="image" />
              </div>
            </a>
            <h5 className="project-name text-center mt-3 pb-3">Large It</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
