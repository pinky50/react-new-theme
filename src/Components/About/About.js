import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import Heading from "../Heading/Heading";
import Team from "../Team/Team";
import RoundBtn from "../RoundBtn/RoundBtn";

import "./About.css";

export default function About({ link }) {
  return (
    <>
      <PageHeader title="About Us" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="about-left-img">
              <img
                src="https://keenitsolutions.com/products/wordpress/bizup/wp-content/uploads/2021/07/about.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-right-content">
              <h1 className="text-uppercase mt-5">Who We Are ?</h1>
              <h2>We help to implement your ideas into automation</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                recusandae ut delectus dolor omnis. Qui, harum? Obcaecati
                ducimus esse saepe ipsum magnam illum, veniam, nisi deserunt
                repellat reprehenderit, facilis eaque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda modi minus quam tempora cupiditate recusandae numquam
                facere odit sequi ea.
              </p>
              <div className="mt-4">
                <RoundBtn content="Contact Us" link="contact" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Heading content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti accusantium, aliquam laborum tempore molestias! ">
        <h1>
          Our<span> Team</span>
        </h1>
      </Heading>
      <Team />
    </>
  );
}
