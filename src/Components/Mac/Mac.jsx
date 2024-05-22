import React from "react";
import "./Macc.css";
import PIc from "../Assests/PIc.png"

const Mac = () => {
  return (
    <div>
      <div className="hi">
        <h1>Themes. Unlimited themes.</h1>
      </div>
      <div className="theme"> 
        Themes in Sleeve make creating and switching between customizations
        easy. Share your own <br /> creations with friends and install as many themes
        as you like with just a double-click.
      </div>
      <div className="img11">
        <img src={PIc} alt="" />
      </div>
      <div className="custom">
        customization
      </div>
    </div>
  );
};

export default Mac;
