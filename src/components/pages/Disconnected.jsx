import React from "react";
import "../styles/Styles.css";
import Vector from "../assets/Vector.svg";
import Rectangle from "../assets/Rectangle6.svg";
import HalfRectangle from "../assets/Rectangle14.svg";
import EllipseYellow from "../assets/Ellipse3.svg";
import VectorUp from "../assets/VectorUp.svg";
import VectorDown from "../assets/VectorDown.svg";
import EllipseGreen from "../assets/Ellipse 3.svg";

function Disconnected({ title, subtitle, kilpersec, megpersec }) {
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
        <div className="ellipse-one">
          <img src={EllipseYellow} alt="ellipse" className="ellipse-yellow" />
          <img src={VectorUp} alt="vectorUp" className="vectorUp" />
          <h4>{kilpersec}</h4>
        </div>
        <div className="ellipse-two">
          <img src={VectorDown} alt="vectorDown" className="vectorDown" />
          <img src={EllipseGreen} alt="ellipse" className="ellipse-green" />
          <h4>{megpersec}</h4>
        </div>
      </div>
    </div>
  );
}

export default Disconnected;
