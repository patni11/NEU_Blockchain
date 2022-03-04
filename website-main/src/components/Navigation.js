import React from "react";
import Cube from "./Cube";
import { useState } from "react";
import "../styles/nav.css";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

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
            <Link to="/" className="items">
              <img src="logo.png" alt="" className="logo" />
            </Link>
            <Link
              to="/Research"
              className="items"
              onClick={() => {
                closePopup();
              }}
            >
              <h3 className="nav-title"> Research </h3>
            </Link>
            <AnchorLink
              to="/#about"
              className="items"
              onClick={() => {
                closePopup();
              }}
            >
              <h3 className="nav-title"> About </h3>
            </AnchorLink>
            <Link
              to="/Events"
              className="items"
              onClick={() => {
                closePopup();
              }}
            >
              <h3 className="nav-title"> Events </h3>
            </Link>
            <Link
              to="/Images"
              className="items"
              onClick={() => {
                closePopup();
              }}
            >
              <h3 className="nav-title"> Gallery </h3>
            </Link>
            <Link
              to="/ContactUs"
              className="items"
              onClick={() => {
                closePopup();
              }}
            >
              <h3 className="nav-title"> Contact Us </h3>
            </Link>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* {popupState ? (
        <NavScreen> </NavScreen>
      ) : (
        <img
          src="hamburger.svg"
          alt=""
          className="hamburger"
          onClick={() => {
            togglePopup();
          }}
        />
      )} */}
      <NavScreen> </NavScreen>
    </>
  );
}
