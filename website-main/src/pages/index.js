import * as React from "react";
import Cube from "../components/Cube";
import Ring from "../components/rings";
import "../styles/logo.css";
// markup
const IndexPage = () => {
  return (
    <div className="logo-container">
      <center>
        <Cube nav={false} position="absolute" top="50%" left="50%"></Cube>
        <ul>
          <li>
            <Ring></Ring>
          </li>
          <li>
            <Ring></Ring>
          </li>
          <li>
            <Ring></Ring>
          </li>
        </ul>
      </center>
    </div>
  );
};

export default IndexPage;
