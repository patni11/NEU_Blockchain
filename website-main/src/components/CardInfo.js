import React from "react";
import "../styles/cardInfo.css";

export default function CardInfo({
  title,
  image,
  description,
  link,
  closePopup,
  link_title,
}) {
  return (
    <div className="popup" onClick={closePopup()}>
      <div className="card-info">
        <img src={image} alt="" className="card-image-info" />
        <div className="card-content">
          <h3 className="card-info-title"> {title} </h3>
          <p className="card-info-para">{description}</p>
          <br />
          {/* {link.includes("medium.com") ? (
            <a href={link} className="card-info-link">
              Read Article
            </a>
          ) : (
            <a href={link} className="card-info-link">
              Download PDF
            </a>
          )} */}
          <a href={link} className="card-info-link">
            {link_title}
          </a>
        </div>
      </div>
    </div>
  );
}
