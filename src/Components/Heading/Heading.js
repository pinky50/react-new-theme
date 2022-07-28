import React from "react";
import "./Heading.css";

export default function Heading({ children, content }) {
  return (
    <div className="Heading-wrapper mb-5">
      <div className="Heading">
        <div> {children}</div>
      </div>
      <div className="heading-content">
        <p>{content}</p>
      </div>
    </div>
  );
}
