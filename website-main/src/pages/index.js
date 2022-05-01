import * as React from "react";
import "../styles/home.css";
import Navigation from "../components/Navigation";
import Section2 from "../components/Section2";
import members from "../components/Team";
import Background from "../components/Background";
import partners from "../components/Partners";

// markup
const IndexPage = () => {
  return (
    <>
      <Navigation></Navigation>
      <section className="area">
        <Background></Background>
        <div className="main">
          <h1 className="home-title"> NEU Blockchain</h1>
          <h3 className="home-subheading">
            Advancing Blockchain Education, Development, and Research
          </h3>
        </div>
      </section>
      <section className="home-about">
        <center>
          <h1 className="about-title"> About NEU Blockchain Organization </h1>
          <br />
          <br />
          <p className="about-para">
            The main purpose of NEU Blockchain Organization is to engage in
            discussion and education of cryptocurrency and blockchain technology
            through hands-on learning experiences through research on
            Northeastern’s campus. We are fostering an open community across
            undergraduate, graduate, alumni, and industry professionals to build
            the next blockchain-crypto hub at Northeastern.
          </p>
          <br />
          <br />
          <p className="about-para">
            The NEU Blockchain Club focuses on four main areas:
          </p>
          <br />

          <ul>
            <li>Education, guest speakers, panels, etc.</li>
            <li>Hands-on learning experiences and software development</li>
            <li>Career, networking, entrepreneur opportunities </li>
            <li>Academic and industry research</li>
          </ul>
        </center>
      </section>
      <Section2
        title="Meet the Team"
        data={members}
        link_title="Link To Socials"
      ></Section2>
      <Section2
        title="Our Partners"
        data={partners}
        link_title="Link To Website"
      ></Section2>
    </>
  );
};

export default IndexPage;
