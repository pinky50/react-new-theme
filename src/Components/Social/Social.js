import React from "react";
import "./Social.css";

export default function Social() {
  return (
    <div className="social">
      <ul className=" social-network social-circle text-right">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/"
            className="icoFacebook"
            title="Facebook"
          >
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/"
            className="icoLinkedin"
            title="Linkedin"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/"
            className="icoTwitter"
            title="Twitter"
          >
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/"
            className="icoYoutube"
            title="Youtube"
          >
            <i className="fa fa-youtube-play"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
