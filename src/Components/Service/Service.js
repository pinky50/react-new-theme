import React from "react";
import RoundBtn from "../RoundBtn/RoundBtn";
import "./Service.css";

export default function Service({ title, content, link, children }) {
  return (
    <div className="service-wrapper wow fadeIn">
      <div className="service-icon mb-2">
        <div className="service-icon-image">{children}</div>
      </div>
      <div className="service-title">
        <h4> {title}</h4>
      </div>
      <div className="service-content mb-3">{content}</div>
      <div className="read-more-btn">
        <RoundBtn content="Read More" link={link} />
      </div>
    </div>
  );
}
