import React from "react";
import Heading from "../Heading/Heading";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import SlideImage from "../SlideImage/SlideImage";
import Softwares from "../Softwares/Softwares";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import AnyQuestion from "../AnyQuestion/AnyQuestion";
import Team from "../Team/Team";
import Works from "../Works/Works";

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
      <Works />
      <div className="pt-4 pb-5 mt-4" style={{ backgroundColor: "#F2F6F7" }}>
        <Heading content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti accusantium, aliquam laborum tempore molestias! ">
          <h1>
            Our <span>Softwares</span>
          </h1>
        </Heading>
        <Softwares />
      </div>

      <Heading content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti accusantium, aliquam laborum tempore molestias! ">
        <h1>
          Meet<span> our Team</span>
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
