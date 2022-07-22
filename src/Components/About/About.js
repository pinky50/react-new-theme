import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import Heading from "../Heading/Heading";

export default function About() {
  return (
    <center>
      <PageHeader title="About Us" />
      <Heading content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti accusantium, aliquam laborum tempore molestias! ">
        <h1>
          who <span>we are ?</span>
        </h1>
      </Heading>
      <h1>About Page</h1>
    </center>
  );
}
