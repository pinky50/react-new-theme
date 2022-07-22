import React from "react";
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
              <img src="img/project1.jpeg" alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
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
              <img src="img/project2.jpeg" alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
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
              <img src="img/project3.jpeg" alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
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
              <img src="img/project4.jpeg" alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
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
              <img src="img/project5.jpeg" alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
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
              <img src="img/project6.jpeg" alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
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
              <img src="img/project7.jpeg" alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
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
              <img src="img/project8.jpeg" alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
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
              <img src="img/project9.jpeg" alt="" className="img-fluid" />
              <div className="portfolio-overlay">
                <a
                  href="https://noboit.com/"
                  className="overlay-content"
                  target="_blank"
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
