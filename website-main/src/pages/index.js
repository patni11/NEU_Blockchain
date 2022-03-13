import * as React from "react";
import "../styles/home.css";
import Navigation from "../components/Navigation";
import About from "../pages/About";
import Section2 from "../components/Section2";
import members from "../components/Team";
import Background from "../components/Background";

// markup
const IndexPage = () => {
  var CLIENT_ID = "<YOUR_CLIENT_ID>";
  var API_KEY = "AIzaSyANP7_gCgpTcSKJCAP-BL_HCvEJIuADrk4";
  return (
    <>
      <Navigation></Navigation>
      <section className="area">
        {/* <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi
            aspernatur, ipsum aut a mollitia obcaecati nostrum eveniet iure
            autem nemo amet voluptate, totam earum nulla. Cupiditate dolor
            doloribus illo reiciendis dolorem animi. Natus quaerat voluptatum
            porro, soluta sint distinctio.
          </h3>
        </center>
      </section>

      <Section2
        title="Meet the Team"
        data={members}
        link_title="Link To Socials"
      ></Section2>
    </>
  );
};

export default IndexPage;
