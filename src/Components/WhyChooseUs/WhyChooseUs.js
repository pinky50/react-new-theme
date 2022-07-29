import React from "react";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="chooseuscontent-wrapper">
            <h1 className="text-uppercase font-bold">Why choose us ?</h1>
            <h2 className="mb-4 font-bold">
              We provide full and specific solutions for our every customers.
            </h2>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="chooseuscontent">
                  <span className="chooseicon text-center">
                    <i className="fa fa-sort-amount-asc" aria-hidden="true"></i>
                  </span>
                  <h4>Latest Technology</h4>
                  <div className="sub-title" />
                  <div className="desc">
                    <p>
                      The great explorer the truth, the sedmaster builder human
                      happiness one rejects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="chooseuscontent">
                  <span className="chooseicon text-center">
                    <i className="fa fa-object-ungroup" aria-hidden="true"></i>
                  </span>
                  <h4>Latest Technology</h4>
                  <div className="sub-title" />
                  <div className="desc">
                    <p>
                      The great explorer the truth, the sedmaster builder human
                      happiness one rejects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="chooseuscontent">
                  <span className="chooseicon text-center">
                    <i className="fa fa-server" aria-hidden="true"></i>
                  </span>
                  <h4>Latest Technology</h4>
                  <div className="sub-title" />
                  <div className="desc">
                    <p>
                      The great explorer the truth, the sedmaster builder human
                      happiness one rejects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="chooseuscontent">
                  <span className="chooseicon text-center">
                    <i className="fa fa-cog" aria-hidden="true"></i>
                  </span>
                  <h4>Latest Technology</h4>
                  <div className="sub-title" />
                  <div className="desc">
                    <p>
                      The great explorer the truth, the sedmaster builder human
                      happiness one rejects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="whychooseimg">
            <img
              src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80"
              alt="choose"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
