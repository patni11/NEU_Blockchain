import React from "react";
import "./CardInfo.css";
export function event_info(info) {
  const date_obj = new Date(Date.parse(info.date))
    .toLocaleString()
    .split(",")[0];
  return <h3 className="date">Publish on: {date_obj}</h3>;
}

export default function CardInfo({
  title,
  image,
  description,
  link,
  closePopup,
  link_title,
  date,
  children,
}) {
  return (
    <div className="popup" onClick={closePopup()}>
      <div className="card-info">
        <img src={image} alt="" className="card-image-info" />
        <div className="card-content">
          <h3 className="card-info-title"> {title} </h3>
          <p className="card-info-para">
            {description.length > 300
              ? description.substring(0, 300) + "...."
              : description}
          </p>
          <br />
          {console.log(description)}
          {date ? event_info({ date: date }) : ""}

          <a href={link} className="card-info-link">
            {link_title}
          </a>
        </div>
      </div>
    </div>
  );
}
