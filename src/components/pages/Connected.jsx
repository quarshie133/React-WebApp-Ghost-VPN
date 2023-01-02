import React from "react";
import "../styles/Styles.css";
import Vector from "../assets/Vector.svg";
import CanadaLogo from "../assets/canada-logo.svg";
import HalfRectangle from "../assets/Rectangle14.svg";
import EllipseYellow from "../assets/Ellipse3.svg";
import VectorUp from "../assets/VectorUp.svg";
import VectorDown from "../assets/VectorDown.svg";
import EllipseGreen from "../assets/Ellipse 3.svg";
import OutlineCircle from "../assets/outlinecircle.svg";
import OuterCircle from "../assets/outercircle.svg";
import InnerCircle from "../assets/innercircle.svg";
import SwitchButtonWhite from "../assets/switchbutton-white.svg";
import Trophy from "../assets/trophyrectangle.svg";

function Connected({ title, subtitle, kilpersec, megpersec }) {
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

          <img src={CanadaLogo} alt="rectangle-image" className="rectangle" />
          <h2>China</h2>
        </div>
        <h1>{title}</h1>
        <h3 className="subtitle-connected">{subtitle}</h3>
        <div className="ellipse-one">
          <img src={EllipseYellow} alt="ellipse" className="ellipse-yellow" />
          <img src={VectorUp} alt="arrowUp" className="arrowUp" />
          <h4>{kilpersec}</h4>
        </div>
        <div className="ellipse-two">
          <img src={VectorDown} alt="arrowDown" className="arrowDown" />
          <img src={EllipseGreen} alt="ellipse" className="ellipse-green" />
          <h4>{megpersec}</h4>
        </div>
        <div className="circle">
          <img
            src={OutlineCircle}
            alt="outline-circle"
            className="outline"
          />
          <img src={OuterCircle} alt="outer-circle" className="outer" />
          <img src={InnerCircle} alt="inner-circle" className="inner" />
          <img
            src={SwitchButtonWhite}
            alt="switch-button"
            className="switch-button-white"
          />
        </div>
        <img src={Trophy} alt="trophy-image" className="trophy-img" />
        <button className="premium-btn">
          <h4 className="text-btn">Go Premium</h4>
        </button>
      </div>
    </div>
  );
}

export default Connected;
