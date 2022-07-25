import React from "react";
import Heading from "../Heading/Heading";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import SlideImage from "../SlideImage/SlideImage";
import Softwares from "../Softwares/Softwares";
import Projects from "../Projects/Projects";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import AnyQuestion from "../AnyQuestion/AnyQuestion";
import Team from "../Team/Team";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Heading content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti accusantium, aliquam laborum tempore molestias! ">
        <h1>
          our <span>key experience</span>
        </h1>
      </Heading>
      <Projects />
      <Heading content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti accusantium, aliquam laborum tempore molestias! ">
        <h1>
          Our <span>Softwares</span>
        </h1>
      </Heading>
      <Softwares />
      <Heading content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti accusantium, aliquam laborum tempore molestias! ">
        <h1>
          Our<span> Team</span>
        </h1>
      </Heading>
      <Team />
      <Heading content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti accusantium, aliquam laborum tempore molestias! ">
        <h1>
          Our <span>Clients</span>
        </h1>
      </Heading>
      <SlideImage />
      <AnyQuestion />
    </div>
  );
}
