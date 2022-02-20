import * as React from "react";
import Section1 from "../components/Section1";
import Navigation from "../components/Navigation";
export default function ContactUs() {
  return (
    <>
      <Navigation></Navigation>
      <Section1
        image="main.png"
        title="Contact Us"
        description="How to Contact Us"
      ></Section1>
    </>
  );
}
