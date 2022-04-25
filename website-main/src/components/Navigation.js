import React from "react";
import { useState } from "react";
import "../styles/nav2.css";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useEffect } from "react";

export default function Navigation() {
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true);
    console.log("open");
  };

  const closePopup = () => {
    setPopup(false);
    console.log("close");
  };

  function NavScreen() {
    return (
      <div
        className={popup ? "nav2" : "nav"}
        onClick={
          popup
            ? () => {
                closePopup();
              }
            : () => {}
        }
      >
        <div className={popup ? "item-container2" : "item-container"}>
          <ul>
            <Link to="/" className="items">
              <img src="logo.png" alt="" className={popup ? "logo2" : "logo"} />
            </Link>
            <div className={popup ? "all_links" : "abcd"}>
              <a
                href=""
                className="items"
                onClick={() => {
                  closePopup();
                  window.location = "mailto:neublockchaingroup@gmail.com";
                }}
                target="_blank"
              >
                <h3 className="nav-title" id="title-scroll">
                  Contact Us
                </h3>
              </a>

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
                to="/Gallery"
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
              <a
                href="https://open.spotify.com/show/3PlymH5URCaCy8OqSBMOdN?si=c3fc6748eb6744b3"
                className="items"
                onClick={() => {
                  closePopup();
                }}
                target="_blank"
              >
                <h3 className="nav-title" id="title-scroll">
                  Podcast
                </h3>
              </a>

              <a
                href="https://web3.career/"
                className="items"
                onClick={() => {
                  closePopup();
                }}
                target="_blank"
              >
                <h3 className="nav-title" id="title-scroll">
                  Jobs
                </h3>
              </a>

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
            </div>
          </ul>
          {popup ? (
            ""
          ) : (
            <div onClick={() => openPopup()} className="hamburger">
              <button>
                <img src="hamburger.svg" alt="" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <NavScreen> </NavScreen>
    </>
  );
}
