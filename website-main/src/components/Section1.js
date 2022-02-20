import React, { Children } from "react";
import "../styles/section1.css";

export default function Section1({ image, title, description, children }) {
  return (
    <section className="section-head">
      <div className="container">
        <center>
          <img src={image} alt="" className="header-image" />
          <div className="section-text">
            <h2 className="section-title">{title}</h2>
            <p className="para">{description}</p>
          </div>
        </center>
        {children}
      </div>
    </section>
  );
}
