import React from "react";
import { Link } from "react-router-dom";
import "./AnyQuestion.css";

export default function AnyQuestion() {
  return (
    <div className="anyquestion-wrapper mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="any-question-left">
              <h3>Do You Have Questions ?</h3>
              <span>We'll help you to grow your career and growth.</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="any-question-right">
              <Link to="/contact" className="ques-btn">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
