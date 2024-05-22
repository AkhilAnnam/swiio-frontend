import React from "react";
import "./Custom.css";
import aa from "../Assests/aa.png";
import arrow from "../Assests/arrow.png";
import astra from "../Assests/astra.png";
import blue from "../Assests/blue.png";
import box from "../Assests/box.png";
import setting from "../Assests/setting.png";
import video from "../Assests/video.png";
import square from "../Assests/square.png";
import three from "../Assests/three.png";

const Custom = () => {
  return (
    <div>
      <div className="cous">
        <h1>Countless ways to customize.</h1>
      </div>
      <div className="cust1">
        Customization is at the core of the Sleeve experience — choose from any <br />
        combination of design choices, behaviors and settings to make Sleeve at
        home on
        <br /> your desktop.
      </div>
      <div className="imgs-container">
        <div className="imgs">
          <img src={astra} alt="" />
          <img src={three} alt="" />
          <img src={video} alt="" />
          <img src={square} alt="" />
          <img src={blue} alt="" />
          <img src={aa} alt="" />
          <img src={arrow} alt="" />
          <img src={box} alt="" />
          <img src={setting} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Custom;
