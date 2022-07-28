import React from "react";
import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <center className="pagenotfound">
      <div style={{ fontSize: "70px", color: "#fff" }}>404</div>
      <h1>
        <span>Opps!</span> Page Not Found.
      </h1>
    </center>
  );
}
