import * as React from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import members from "../components/Team";
import Navigation from "../components/Navigation";
export default function About() {
  return (
    <>
      <Navigation></Navigation>
      <Section1
        image="main.png"
        title="About"
        description="We are NEU Blockchain"
      ></Section1>
      <Section2
        title="Meet the Team"
        data={members}
        link_title="Link To Socials"
      ></Section2>
    </>
  );
}
