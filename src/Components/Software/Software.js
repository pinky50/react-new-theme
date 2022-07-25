import React from "react";
import "./Software.css";

export default function Software({ title, content, children }) {
  return (
    <div className="software-wrapper">
      <div className="software-icon mb-3">{children}</div>
      <div className="software-title">
        <h4> {title}</h4>
      </div>
      <div className="software-content mb-1">{content}</div>
      <div className="view-details">
        <a href="#!">View Details</a>
      </div>
    </div>
  );
}
