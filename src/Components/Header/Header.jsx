import React from "react";
import "./Header.css";
import Applemusic from "../Assests/Applemusic.png";
import Spotify from "../Assests/Spotify.png";
import Doppler from "../Assests/Doppler.png";
import Play from "../Assests/Play.png";

const Header = () => {
  return (
    <div>
      <h1>Sleeve 2</h1>
      <p>The ultimate music accessory for your Mac.</p>
      <p className="pp">
        Sleeve sits on the desktop, displaying and controlling the music you’re{" "}
        <br />
        currently playing in{" "}
        <img src={Applemusic} alt="" className="inline-icon" /> Apple Music,
        <img src={Spotify} alt="" className="inline-icon" /> Spotify, and{" "}
        <img src={Doppler} alt="" className="inline-icon" />
        Doppler.
      </p>
      <div className="btn1">
        <a href="">
          <button className="btn">Mac App Store</button>
        </a>
        <a href="/checkout">
          <button className="btn2">
            Buy Directly
             </button>
        </a>
      </div>
      <div>
        <p className="p3">
          No subscriptions. No in-app <br />
          purchases. Requires macOS 11 Big Sur <br />
          or later.
        </p>
      </div>
      <div>
        <button className="btn11">
          
          <img src={Play} alt="" /> Now with shelves and a progress bar. See
          what's new in Sleeve 2.3
        </button>
      </div>
    </div>
  );
};

export default Header;
