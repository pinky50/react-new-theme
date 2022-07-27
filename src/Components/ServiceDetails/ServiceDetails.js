import React, { useState } from "react";
import RoundBtn from "../RoundBtn/RoundBtn";
import Collapse from "react-bootstrap/Collapse";
import "./ServiceDetails.css";

export default function ServiceDetails() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="services-details-left">
            <div className="special-links">
              <ul>
                <h2 className="mb-4">All Services</h2>
                <li>
                  <a href="#!" className="active">
                    Web development
                  </a>
                </li>
                <li>
                  <a href="#!">Software development</a>
                </li>
                <li>
                  <a href="#!">Taxes Planing</a>
                </li>
                <li>
                  <a href="#!">Business Loan</a>
                </li>
                <li>
                  <a href="#!">Insurance Consulting</a>
                </li>
                <li>
                  <a href="#!">Investments Managment</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="service-widget service-banner">
            <span>Offer Banner</span>
            <h3>Do You Have a Project In Your Mind </h3>
            <RoundBtn content="Get Started" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="services-details-img">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="jj"
              className="img-fluid"
            />
          </div>
          <div className="services-title">
            <h4 className="mt-2 mb-2">Financial Planing</h4>
          </div>
          <div className="services-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            congue justo scelerisque mattis iaculis. Maecenas vestibulum
            faucibus enim scelerisque egestas. Praesent facilisis, tortor vel
            vehicula imperdiet, felis massa ultrices metus, sed consectetur
            massa ex vitae sem. Integer eu sodales augue. Suspendisse eget
            placerat lorem. Phasellus ac hendrerit leo. Morbi quis iaculis eros.
            Sed tincidunt augue ante, sit amet vehicula odio aliquam quis. Donec
            at malesuada nisl. Pellentesque eros lorem, aliquet id hendrerit id,
            hendrerit ac odio. In dui mauris, auctor vel vestibulum vitae,
            tincidunt id mi.Curabitur dictum, sapien eu mattis pretmattis
            iaculis. Maecenas vestibulum faucibus enim scelerisque egestas.
            Praesent facilisis, tortor vel vehicula imperdiet, felis massa
            ultrices metus.
          </div>
          <br />
          <div className="row">
            <div className="col-md-5">
              <div className="services-single-image">
                <img
                  src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-7 pb-5">
              <div className="services-single-title">
                <h4 className="mb-2">Investment Bank</h4>
              </div>
              <div className="services-single-details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent congue justo scelerisque mattis iaculis. Maecenas
                vestibulum faucibus enim scelerisque egestas. Praesent
                facilisis, tortor vel vehicula imperdiet, felis massa ultrices
                metus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
