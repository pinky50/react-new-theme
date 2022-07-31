import React from "react";
import Service from "../Service/Service";
import Heading from "../Heading/Heading";
import "./Services.css";
import serviceImg1 from "../../images/servicesImg/global.png";
import serviceImg2 from "../../images/servicesImg/laptop.png";
import serviceImg3 from "../../images/servicesImg/shopping-online.png";

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
              <img className="serviceimg" src={serviceImg1} alt="" />
            </Service>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Service
              title="Software Development"
              content="Pointing on different industry trends, polishes solutions and services to meet the customized requirements for players across different industries."
              link="services/softwaredevelopment"
            >
              <img className="serviceimg" src={serviceImg2} alt="" />
            </Service>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Service
              title="Software Development"
              content="Pointing on different industry trends, polishes solutions and services to meet the customized requirements for players across different industries."
            >
              <img className="serviceimg" src={serviceImg3} alt="" />
            </Service>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Service
              title="Web Development"
              content="Pointing on different industry trends, polishes solutions and services to meet the customized requirements for players across different industries."
              link="services/webdevelopment"
            >
              {/* <i className="fa fa-globe" aria-hidden="true"></i> */}
              <img className="serviceimg" src={serviceImg3} alt="" />
            </Service>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Service
              title="Software Development"
              content="Pointing on different industry trends, polishes solutions and services to meet the customized requirements for players across different industries."
              link="services/softwaredevelopment"
            >
              <img className="serviceimg" src={serviceImg3} alt="" />
            </Service>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Service
              title="Software Development"
              content="Pointing on different industry trends, polishes solutions and services to meet the customized requirements for players across different industries."
            >
              <img className="serviceimg" src={serviceImg3} alt="" />
            </Service>
          </div>
        </div>
      </div>
    </>
  );
}
