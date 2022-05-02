import React from "react";
import "./CardInfo.css";

export default function Card({ image, title, description, link }) {
  return (
    <div className="card">
      <img src={image || "me.png"} alt="" className="card-image" />
      <h3 className="card-title"> {title || "Title"} </h3>
    </div>
  );
}
