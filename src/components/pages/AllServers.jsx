import React from "react";
import "../styles/AllServers.css";
import Vector from "../assets/Vector.svg";
import HalfRectangle from "../assets/Rectangle14.svg";
import Rectangle from "../assets/Rectangle6.svg";
import SearchIcon from "../assets/searchicon.svg";
import GhanaIcon from "../assets/ghana-icon.svg";
import CameroonIcon from "../assets/cameroon-icon.svg";
import ArgentinaIcon from "../assets/argentina-icon.svg";
import BrazilIcon from "../assets/brazil-icon.svg";
import CanadaIcon from "../assets/canada-icon.svg";
import PortugalIcon from "../assets/portugal-icon.svg";
import ItalyIcon from "../assets/italy-icon.svg";
import FirstSignal from "../assets/first-signal.svg";
import SecondSignal from "../assets/second-signal.svg";
import ThirdSignal from "../assets/third-signal.svg";
import FourthSignal from "../assets/fourth-signal.svg";
import FifthSignal from "../assets/fifth-signal.svg";

function AllServers({}) {
  return (
    <div className="dashboard-layer">
      <div className="server-layer">
        <div className="wrapper">
          <div className="vector-img"></div>
          <img src={Vector} className="vector" />

          <img src={HalfRectangle} className="yellow-rect" />

          <img src={Rectangle} className="rectangle" />
          <h2>China</h2>
        </div>
      </div>
      <div className="vect">
        <div className="notch"></div>
        <div className="icon">
          <img src={SearchIcon} alt="searchhicon" className="search-icon" />
        </div>
        <input
          type="text"
          placeholder="Search location"
          className="search-input"
        />
        <h2 className="subtitle">First Servers</h2>
        <div className="first-server">
          <img src={GhanaIcon} className="gh-icon" />
          <h4 className="sub-title">Ghana</h4>
          <div className="first-signal-serve">
            <img src={FirstSignal} className="firstsignal" />
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <div className="second-server">
          <img src={CameroonIcon} className="cameroon-icon" />
          <h4 className="sub-title">Cameroon</h4>
          <div className="second-signal-serve">
            <img src={SecondSignal} className="firstsignal" />
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <div className="third-server">
          <img src={ArgentinaIcon} className="argentina-icon" />
          <h4 className="sub-title">Argentina</h4>
          <div className="third-signal-serve">
            <img src={ThirdSignal} className="firstsignal" />
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <div className="fourth-server">
          <img src={BrazilIcon} className="brazil-icon" />
          <h4 className="sub-title">Brazil</h4>
          <div className="fourth-signal-serve">
            <img src={FourthSignal} className="firstsignal" />
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <h2 className="subtitle">Premium Servers</h2>
        <div className="fifth-server">
          <img src={CanadaIcon} className="canada-icon" />
          <h4 className="sub-title">Canada</h4>
          <div className="fifth-signal-serve">
            <img src={FifthSignal} className="firstsignal" />
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <div className="sixth-server">
          <img src={PortugalIcon} className="portugal-icon" />
          <h4 className="sub-title">Portugal</h4>
          <div className="sixth-signal-serve">
            <img src={FifthSignal} className="firstsignal" />
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <div className="seventh-server">
          <img src={ItalyIcon} className="italy-icon" />
          <h4 className="sub-title">Italy</h4>
          <div className="seventh-signal-serve">
            <img src={FifthSignal} className="firstsignal" />
            <button className="connect-btn">Connect</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllServers;
