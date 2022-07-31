import React from "react";
import RoundBtn from "../RoundBtn/RoundBtn";
import { Link } from "react-router-dom";
import "./ServiceDetailsLeft.css";

export default function ServiceDetailsLeft() {
  return (
    <>
      <div className="services-details-left">
        <div className="special-links mb-4">
          <ul>
            <h2 className="mb-4">All Services</h2>
            <li>
              <Link to="/services/webdevelopment" className="active">
                Web development
              </Link>
            </li>
            <li>
              <Link to="/services/softwaredevelopment">
                Software Development
              </Link>
            </li>
            <li>
              <Link to="/services/graphicdesign">Graphic Design</Link>
            </li>
            <li>
              <Link to="/services/digitalmarketing">Digital Marketing</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="service-widget service-banner mb-4">
        <span>Offer Banner</span>
        <h3>Do You Have a Project In Your Mind </h3>
        <RoundBtn content="Get Started" />
      </div>
    </>
  );
}
