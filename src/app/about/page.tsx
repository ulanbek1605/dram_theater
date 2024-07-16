import Cards from "@/components/aboutAnimations";
import Artist from "@/components/Artist";
import Paralax from "@/components/Paralax";
import Duotes from "@/components/quotes";
import React from "react";

const About = () => {
  return (
    <>
      <Artist />
      <Paralax />
      <Cards />
      <Duotes />
    </>
  );
};

export default About;
