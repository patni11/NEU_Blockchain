import * as React from "react";
import "../styles/home.css";
import Navigation from "../components/Navigation";
import Section2 from "../components/Section2";
import members from "../components/Team";
import Background from "../components/Background";
import partners from "../components/Partners";

// markup
const IndexPage = () => {
  var CLIENT_ID = "<YOUR_CLIENT_ID>";
  var API_KEY = "AIzaSyANP7_gCgpTcSKJCAP-BL_HCvEJIuADrk4";
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

      <section className="secondary">
        <center className="secondary-content">
          <h1 className="secondary-title"> About Us </h1>
          <h3 className="secondary-subheading">
            NEU Blockchain is a blockchain club run by students of Northeastern
            University. We believe that decentralized ledger technology will be
            a integral part of society in future.
            <br />
            <br /> Our aim is to educate students and general public about
            applications of blockchain and intricate technical details that make
            all of it possible. We do it through virtual/inperson events every
            monday, educational posts, podcasts, and in-depth research
            articles/papers.
          </h3>
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
