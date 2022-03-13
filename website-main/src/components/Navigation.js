import React from "react";
import Cube from "./Cube";
import { useState } from "react";
import "../styles/nav.css";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useEffect } from "react";

export default function Navigation() {
  const [popupState, setpopState] = useState(false);
  function togglePopup() {
    setpopState(!popupState);
  }

  function closePopup() {
    setpopState(!popupState);
  }

  useEffect(() => {
    const header = document.getElementById("header");
    const titles = document.querySelectorAll(".nav-title");
    window.onscroll = function() {
      var top = window.scrollY;
      if (top >= 100) {
        header.classList.add("scrolled");
        for (let i = 0; i < titles.length; i++) {
          titles[i].classList.add("title-scrolled");
        }
      } else {
        header.classList.remove("scrolled");
        for (let i = 0; i < titles.length; i++) {
          titles[i].classList.remove("title-scrolled");
        }
      }
    };
  }, []);

  function NavScreen() {
    return (
      <div
        className="nav"
        id="header"
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
              <h3 className="nav-title" id="title-scroll">
                {" "}
                Research{" "}
              </h3>
            </Link>

            <Link
              to="/Events"
              className="items"
              onClick={() => {
                closePopup();
              }}
            >
              <h3 className="nav-title" id="title-scroll">
                {" "}
                Events{" "}
              </h3>
            </Link>
            <a
              href="https://shubhpatni.com/"
              className="items"
              onClick={() => {
                closePopup();
              }}
            >
              <h3 className="nav-title" id="title-scroll">
                Podcast
              </h3>
            </a>
            <Link
              to="/Images"
              className="items"
              onClick={() => {
                closePopup();
              }}
            >
              <h3 className="nav-title" id="title-scroll">
                {" "}
                Gallery{" "}
              </h3>
            </Link>
            <AnchorLink
              to="/#about"
              className="items"
              onClick={() => {
                closePopup();
              }}
            >
              <h3 className="nav-title" id="title-scroll">
                {" "}
                About{" "}
              </h3>
            </AnchorLink>

            <Link
              to="/ContactUs"
              className="items"
              onClick={() => {
                closePopup();
              }}
            >
              <h3 className="nav-title" id="title-scroll">
                {" "}
                Contact Us{" "}
              </h3>
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
