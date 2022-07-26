import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// import Social from "../Social/Social"

export default function Footer() {
  return (
    <>
      <>
        {/*================================================
      footer widget start here
=================================================*/}
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-3">
                <div className="footer-widget-logo">
                  <Link to="/">
                    <img
                      src="https://www.banglapuzzle.com/uploads/settings/logo.png"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="footer-widget-content pb-2 pt-2">
                  US IT is a growing up software company in Bangladesh. We
                  provide domain registration, hosting, web application and
                  digital marketing services.
                </div>
                {/* <Social/> */}
                <div className="subscribe-area">
                  <input type="email" placeholder="Enter your email" />
                  <button>Go</button>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="quick-links ">
                  <span className="mb-4">Quick Links</span>
                  <ul className="mt-4" style={{ paddingLeft: "0px" }}>
                    <li className="mb-3">
                      <Link to="about">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                        About
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="portfolio">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                        Portfolio
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="services">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="contact">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="latest-news quick-links mb-4 ">
                  <span>SERVICES</span>
                  <ul className="mt-4" style={{ paddingLeft: "0px" }}>
                    <li className="mb-3">
                      <Link to="services/webdevelopment">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />{" "}
                        Web Development
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="services/softwaredevelopment">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />{" "}
                        Web Development
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="services/webdevelopment">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />{" "}
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link to="services/webdevelopment">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />{" "}
                        Web Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className=" quick-links">
                  <span>CONTACT</span>
                </div>
                <ul className="contact mt-4" style={{ paddingLeft: "0px" }}>
                  <li className="address">
                    <i className="fa fa-map-marker" aria-hidden="true" /> 123
                    6th St. Newyork
                  </li>
                  <li className="phone">
                    <i className="fa fa-phone" aria-hidden="true" /> (888)
                    123-2323
                  </li>
                  <li className="email">
                    <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
                    example@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*================================================
        footer widget end here
=================================================*/}
        {/*================================================
        footer start here
=================================================*/}
        <div className="footer text-center pt-4 pb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-icons mb-4 icoFacebook">
                  <a
                    className="facebook"
                    title="facebook"
                    href="https://www.facebook.com/"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                  <a
                    className="gplus"
                    title="linkedin"
                    href="https://www.linkedin.com/"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                  <a
                    className="twitter"
                    title="twitter"
                    href="https://twitter.com/"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    className="github"
                    title="youtube"
                    href="https://www.youtube.com/"
                  >
                    <i className="fa fa-youtube-play" />
                  </a>
                </div>
                <p>
                  <span>Us It</span> © 2022. All Right Reserved Malo.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*================================================
        footer  end here
=================================================*/}
      </>
    </>
  );
}
