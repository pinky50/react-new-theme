import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import Heading from "../Heading/Heading";
import Works from "../Works/Works";

export default function Portfolio() {
  return (
    <center>
      <PageHeader title="Portfolio" />
      <Heading content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti accusantium, aliquam laborum tempore molestias! ">
        <h1>
          our<span> latest works</span>
        </h1>
      </Heading>

      <Works />
    </center>
  );
}
