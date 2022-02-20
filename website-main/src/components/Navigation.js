import React from "react";
import Cube from "./Cube";
import { useState } from "react";
import "../styles/nav.css";
import { Link } from "gatsby";

export default function Navigation() {
  const [popupState, setpopState] = useState(false);
  function togglePopup() {
    setpopState(!popupState);
  }

  function closePopup() {
    setpopState(!popupState);
  }

  function NavScreen() {
    return (
      <div
        className="nav"
        onClick={() => {
          closePopup();
        }}
      >
        <div className="item-container">
          <ul>
            <Link to="/Research" className="items">
              <h2> Research </h2>
            </Link>
            <Link to="/About" className="items">
              <h2> About </h2>
            </Link>
            <Link to="/Events" className="items">
              <h2> Events </h2>
            </Link>
            <Link to="/Images" className="items">
              <h2> Gallery </h2>
            </Link>
            <Link to="/ContactUs" className="items">
              <h2> Contact Us </h2>
            </Link>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      {popupState ? (
        <NavScreen> </NavScreen>
      ) : (
        <Cube
          nav={true}
          size="50px"
          position="fixed"
          top="50px"
          left="92vw"
          onClick={togglePopup}
        ></Cube>
      )}
    </>
  );
}
