import React from "react";
import "../styles/Styles.css";
import Vector from "../assets/Vector.svg";
import Rectangle from "../assets/Rectangle6.svg";


function Disconnected() {
  return (
    <div className="third-layer">
      <div className="fourth-layer">
        <div className="wrap">
          <div className="vector-img"></div>

          <img src={Vector} alt="vector-image" className="vector" />
          <img src={Rectangle} alt="rectangle-image" className="rectangle" />
        </div>
        <h1>00:00:00</h1>
      </div>
    </div>
  );
}

export default Disconnected;
