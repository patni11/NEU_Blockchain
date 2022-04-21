import React from "react";
import Card from "./Card";
import CardInfo from "./CardInfo";
import "../styles/section2.css";
import { useState, useEffect } from "react";

export default function Section2({ title, data, link_title, children, bg }) {
  const [popupState, setpopState] = useState(false);
  const [popupData, setPopupData] = useState(data ? data[0] : "");
  function togglePopup(research) {
    setpopState(!popupState);
    setPopupData(research);
  }
  let background = "#1d1d20";

  useEffect(() => {
    background = bg ? bg : "#1d1d20";
  }, []);

  function closePopup() {
    setpopState(!popupState);
  }

  return (
    <section
      className="section-secondary bg"
      style={{ background: background }}
    >
      <div className="secondary-container">
        <center>
          <div>
            <h2 className="section-secondary-title">{title}</h2>
            {data ? (
              <div className="researches">
                {data.map((research, index) => {
                  return (
                    <a
                      onClick={() => {
                        togglePopup(research);
                      }}
                      target="_blank"
                      key={research.id}
                    >
                      <Card
                        image={research.image}
                        description={research.description}
                        title={research.title}
                        link={research.link}
                        key={research.id}
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
            ) : (
              ""
            )}
          </div>

          {children}
        </center>
      </div>
    </section>
  );
}
