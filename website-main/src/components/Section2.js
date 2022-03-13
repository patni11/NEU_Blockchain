import React from "react";
import Card from "./Card";
import CardInfo from "./CardInfo";
import "../styles/section2.css";
import { useState } from "react";

export default function Section2({ title, data, link_title, children }) {
  const [popupState, setpopState] = useState(false);
  const [popupData, setPopupData] = useState(data[0]);
  function togglePopup(research) {
    setpopState(!popupState);
    setPopupData(research);
  }

  function closePopup() {
    setpopState(!popupState);
  }

  return (
    <section className="section-secondary bg">
      <div className="secondary-container">
        <center>
          <h2 className="section-secondary-title">{title}</h2>
          <div className="researches">
            {data.map((research) => {
              return (
                <a
                  onClick={() => {
                    togglePopup(research);
                  }}
                  key={research.id}
                >
                  <Card
                    image={research.image}
                    description={research.description}
                    title={research.title}
                    link={research.link}
                  ></Card>
                </a>
              );
            })}

            {popupState && (
              <CardInfo
                key={popupData.id}
                image={popupData.image}
                description={popupData.description}
                title={popupData.title}
                link={popupData.link}
                link_title={link_title}
                closePopup={() => closePopup}
                date={popupData.date}
              ></CardInfo>
            )}
          </div>
        </center>
      </div>
    </section>
  );
}
