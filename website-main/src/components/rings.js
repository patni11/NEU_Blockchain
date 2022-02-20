import React from "react";
import "../styles/ring.css";
function Ring() {
  return (
    <div id="ring-wrapper">
      <div class="ring-box-area">
        <div id="ring-box-front" class="ring-box"></div>
        <div id="ring-box-back" class="ring-box"></div>
        <div id="ring-box-left" class="ring-box"></div>
        <div id="ring-box-right" class="ring-box"></div>
      </div>
    </div>
  );
}

export default Ring;
