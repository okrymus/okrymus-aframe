import React, { Component } from "react";
import "../../styles/splash";
import AframeContent from "./ascene";
import "aframe";

class PeriodicTable extends Component {
  componentDidMount() {
    openAbout.addEventListener("click", () => {
      about.classList.add("visible");
    });

    closeAbout.addEventListener("click", () => {
      about.classList.remove("visible");
    });

    // // initSplash();
  }

  render() {
    return (
      <div>
        <div id="splash" className="visible">
          <canvas id="splash-canvas"></canvas>
          <div id="splash-container">
            <h1 id="title">INSIDE MUSIC</h1>
            <p id="featuring">featuring</p>
            <div id="enter-vr-container" style={{ color: "#ffffff" }}>
              <img id="loader" src={require("../../static/img/loader.gif")} />
              <a id="try-it-in-360" style={{ display: "none" }}>
                try it in 360
              </a>
            </div>
          </div>
          <div id="openAbout" className="aboutButton"></div>
          <div id="about">
            <div id="closeAbout" className="aboutButton"></div>
            <div id="content">
              <h2 id="aboutTitle">SONG EXPLODER PRESENTS: INSIDE MUSIC</h2>
              <p>
                What if you could step inside a song? This is a simple is made.
              </p>
            </div>
          </div>
        </div>
        <AframeContent></AframeContent>
      </div>
    );
  }
}

export default PeriodicTable;
