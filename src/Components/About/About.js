import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import Heading from "../Heading/Heading";
import Team from "../Team/Team";
import RoundBtn from "../RoundBtn/RoundBtn";
import "./About.css";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import AnyQuestion from "../AnyQuestion/AnyQuestion";

export default function About({ link }) {
  return (
    <>
      <PageHeader title="About Us" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-left-img">
              <img
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="about-img"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-right-content ml-4">
              <h1 className="text-uppercase">Who We Are ?</h1>
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
      <WhyChooseUs />

      <Heading content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti accusantium, aliquam laborum tempore molestias! ">
        <h1>
          Our<span> Team</span>
        </h1>
      </Heading>
      <Team />
      <AnyQuestion />
    </>
  );
}
