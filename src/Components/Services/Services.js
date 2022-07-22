import React from "react";
import Service from "../Service/Service";
import Heading from "../Heading/Heading";
import "./Services.css";

export default function Services() {
  return (
    <>
      <Heading content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti accusantium, aliquam laborum tempore molestias! ">
        <h1>
          Our <span>Services</span>
        </h1>
      </Heading>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Service
              title="Web Development"
              content="Pointing on different industry trends, polishes solutions and services to meet the customized requirements for players across different industries."
              link="services/webdevelopment"
            >
              <img
                className="serviceimg"
                src="images/servicesImg/global.png"
                alt=""
              />
            </Service>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Service
              title="Software Development"
              content="Pointing on different industry trends, polishes solutions and services to meet the customized requirements for players across different industries."
              link="services/softwaredevelopment"
            >
              <img
                className="serviceimg"
                src="images/servicesImg/laptop.png"
                alt=""
              />
            </Service>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Service
              title="Software Development"
              content="Pointing on different industry trends, polishes solutions and services to meet the customized requirements for players across different industries."
            >
              <img
                className="serviceimg"
                src="images/servicesImg/shopping-online.png"
                alt=""
              />
            </Service>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Service
              title="Web Development"
              content="Our solutions are based on realistic business analysis to reinvent your company showcase and enhance customer experience. To meet your business challenges, we build native end-to-end solutions for your market requirements."
              link="services/webdevelopment"
            >
              {/* <i className="fa fa-globe" aria-hidden="true"></i> */}
              <img
                className="serviceimg"
                src="images/servicesImg/laptop.png"
                alt=""
              />
            </Service>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Service
              title="Software Development"
              content="Pointing on different industry trends, polishes solutions and services to meet the customized requirements for players across different industries."
              link="services/softwaredevelopment"
            >
              <img
                className="serviceimg"
                src="images/servicesImg/global.png"
                alt=""
              />
            </Service>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Service
              title="Software Development"
              content="Pointing on different industry trends, polishes solutions and services to meet the customized requirements for players across different industries."
            >
              <img
                className="serviceimg"
                src="images/servicesImg/shopping-online.png"
                alt=""
              />
            </Service>
          </div>
        </div>
      </div>
    </>
  );
}
