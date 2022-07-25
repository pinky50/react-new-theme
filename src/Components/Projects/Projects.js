import React from "react";
// import Project from "../../images/projectImg/project.jpeg";
import Project1 from "../../images/projectImg/project1.jpeg";
import Project2 from "../../images/projectImg/project2.jpeg";
import Project3 from "../../images/projectImg/project3.jpeg";
import Project4 from "../../images/projectImg/project4.jpeg";
import Project5 from "../../images/projectImg/project5.jpeg";
import Project6 from "../../images/projectImg/project6.jpeg";
import Project7 from "../../images/projectImg/project7.jpeg";
import Project8 from "../../images/projectImg/project9.jpeg";
import "./Projects.css";

export default function Projects() {
  return (
    <div id="portfolio" className="cd-section section-padding">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-12 text-center">
            <div id="filters" className="button-group">
              <button className="button is-checked" data-filter="*">
                All Work
              </button>
              <button className="button" data-filter=".web-design">
                Web Design
              </button>
              <button className="button" data-filter=".transition">
                Photoshoot
              </button>
              <button className="button" data-filter=".logo-design">
                Logo Design
              </button>
              <button className="button" data-filter=".brand">
                Zoomla
              </button>
              <button className="button" data-filter=".ui-design">
                UI Design
              </button>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="row">
            <div
              className="element-item brand web-design  col-lg-4 col-md-6 col-sm-6 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <img src={Project1} alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
                  rel="noreferrer"
                  data-gallery="example-gallery"
                >
                  live demo
                </a>
              </div>
            </div>
            <div
              className="element-item ui-design logo-design  col-lg-4 col-md-6 col-sm-6 wow fadeIn"
              data-wow-delay="0.2s"
            >
              <img src={Project2} alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
                  rel="noreferrer"
                  data-gallery="example-gallery"
                >
                  live demo
                </a>
              </div>
            </div>
            <div
              className="element-item ui-design transition  col-lg-4 col-md-6 col-sm-6 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <img src={Project3} alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
                  rel="noreferrer"
                  data-gallery="example-gallery"
                >
                  live demo
                </a>
              </div>
            </div>
            <div
              className="element-item web-design logo-design  col-lg-4 col-md-6 col-sm-6 wow fadeIn"
              data-wow-delay="0.4s"
            >
              <img src={Project4} alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
                  rel="noreferrer"
                  data-gallery="example-gallery"
                >
                  live demo
                </a>
              </div>
            </div>
            <div
              className="element-item ui-design  transition  col-lg-4 col-md-6 col-sm-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <img src={Project7} alt="" className="img-fluid" />

              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
                  rel="noreferrer"
                  data-gallery="example-gallery"
                >
                  live demo
                </a>
              </div>
            </div>
            <div
              className="element-item brand web-design transition col-12 col-lg-4 col-md-6 col-sm-6 wow fadeIn"
              data-wow-delay="0.6s"
            >
              <img src={Project5} alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
                  rel="noreferrer"
                  data-gallery="example-gallery"
                >
                  live demo
                </a>
              </div>
            </div>
            <div
              className="element-item web-design logo-design col-12 col-lg-4 col-md-6 col-sm-6 wow fadeIn"
              data-wow-delay="0.7s"
            >
              <img src={Project6} alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
                  rel="noreferrer"
                  data-gallery="example-gallery"
                >
                  live demo
                </a>
              </div>
            </div>
            <div
              className="element-item ui-design  transition col-12 col-lg-4 col-md-6 col-sm-6 wow fadeIn"
              data-wow-delay="0.8s"
            >
              <img src={Project8} alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
                  rel="noreferrer"
                  data-gallery="example-gallery"
                >
                  live demo
                </a>
              </div>
            </div>
            <div
              className="element-item ui-design logo-design col-12 col-lg-4 col-md-6 col-sm-6 wow fadeIn"
              data-wow-delay="0.9s"
            >
              <img src={Project1} alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
                  rel="noreferrer"
                  data-gallery="example-gallery"
                >
                  live demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
