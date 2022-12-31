import React from "react";
import "../styles/Styles.css";
import RocketImage from "../assets/Rectangle.svg";

function Onboarding() {
  return (
    <div className="first-layer">
      <div className="second-layer">
        <img src={RocketImage} alt="rocketImage" className="rocket" />

        <button className="btn-1">Sign In</button>
        <button className="btn-2">Sign Up</button>
      </div>
    </div>
  );
}

export default Onboarding;
