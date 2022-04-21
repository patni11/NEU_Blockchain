import React from "react";
import "../styles/ring.css";
function Ring() {
  return (
    <div id="ring-wrapper">
      <div className="ring-box-area">
        <div id="ring-box-front" className="ring-box"></div>
        <div id="ring-box-back" className="ring-box"></div>
        <div id="ring-box-left" className="ring-box"></div>
        <div id="ring-box-right" className="ring-box"></div>
      </div>
    </div>
  );
}

export default Ring;
