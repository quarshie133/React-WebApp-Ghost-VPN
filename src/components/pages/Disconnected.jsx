import React from "react";
import "../styles/Styles.css";
import Vector from "../assets/Vector.svg";
import Rectangle from "../assets/Rectangle6.svg";
import HalfRectangle from "../assets/Rectangle14.svg";

function Disconnected({ title, subtitle }) {
  return (
    <div className="third-layer">
      <div className="fourth-layer">
        <div className="wrap">
          <div className="vector-img"></div>

          <img src={Vector} alt="vector-image" className="vector" />

          <img
            src={HalfRectangle}
            alt="rectangle-image"
            className="yellow-rect"
          />

          <img src={Rectangle} alt="rectangle-image" className="rectangle" />
          <h2>China</h2>
        </div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
}

export default Disconnected;
