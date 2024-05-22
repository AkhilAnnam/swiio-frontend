import React from "react";
import "./Artwork.css";
import box from "../Assests/box.png";
import square from "../Assests/square.png";
import arrow from "../Assests/arrow.png";
import video from "../Assests/video.png";
import three from "../Assests/three.png";
import astra from "../Assests/astra.png";
import setting from "../Assests/setting.png";
import aa from "../Assests/aa.png";
import s from "../Assests/s.png";
import mm from "../Assests/mm.png";
import l from "../Assests/l.png";
import xl from "../Assests/xl.png";

const Artwork = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="artwork">
          <img src={box} alt="Artwork" />
          <p>Artwork</p>
          <div className="art1">
            Scale artwork all the way up or all <br /> the way down. Round the
            corners <br /> or leave them square.
          </div>
          <div className="art1">
            Choose shadow and lighting <br /> effects to bring your album <br />{" "}
            artwork to life.
          </div>
          <div className="art1">Or hide it completely.</div>
          <div className="artwork11">
            <img src={aa} alt="" />
            <p>Typography</p>
          </div>
          <div className="art1">
            Pick the track info you want to <br /> display, and then exactly how
            to <br /> display it.
          </div>
          <div className="art1">
            Choose the fonts, weights, sizes,
            <br /> and transparency to use for each <br /> line, along with
            customizing color <br /> and shadow.
          </div>

          <div className="artwork1">
            <img src={square} alt="" />
            <img src={arrow} alt="" />
            <img src={video} alt="" />
            <p>Interface</p>
          </div>

          <div className="art1">
            Customize the layout, alignment <br /> and position to fit your
            setup.
          </div>
          <div className="art1">
            Show and hide playback controls. <br /> Add a backdrop layer and
            customize it.
          </div>
          <div className="artwork2">
            <img src={three} alt="" />
            <img src={astra} alt="" />
            <img src={setting} alt="" />

            <p>Settings</p>
          </div>
          <div className="art1">
            Decide if Sleeve stays out of <br /> the way, behind windows, or in{" "}
            <br /> front of them — or only when <br /> you need to see it.
          </div>
          <div className="art1">
            Show it in the Dock, choose from <br /> custom icons, or keep it on
            the <br /> Desktop only.
          </div>
          <div className="art1">
            Set your custom keyboard <br /> shortcuts and integrate with the{" "}
            <br /> apps you use.
          </div>
        </div>
      </div>
      <div className="right">
        <div className="firstbox">
          <img src={s} alt="" />
          <img src={mm} alt="" />
          <img src={l} alt="" />
          <img src={xl} alt="" />
        </div>
        <div className="secondbox">
          <div className="icon-box">
            <i className="bx bx-x-circle"></i>
            <p>None</p>
          </div>
          <div className="icon-box">
            <i className="bx bx-square-rounded"></i>
            <p>Subtle</p>
          </div>
          <div className="icon-box">
            <i className="bx bx-square-rounded"></i>
            <p>Regular</p>
          </div>
          <div className="icon-box highlighted">
            <i className="bx bx-square-rounded"></i>
            <p>Deep</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artwork;
