import React, { Component } from "react";
import initSplash from "./splash/Splash";
import "../../styles/splash";
import AframeContent from "./ascene";

// import ExitButton from "./interface/ExitButton";
class PeriodicTable extends Component {
  constructor() {
    super();
    // const element = document.querySelector("#exitButton");
  }
  componentDidMount() {
    openAbout.addEventListener("click", () => {
      about.classList.add("visible");
    });

    closeAbout.addEventListener("click", () => {
      about.classList.remove("visible");
    });

    initSplash();
  }

  render() {
    return (
      <div>
        <AframeContent></AframeContent>
        <div id="splash" className="visible">
          <canvas id="splash-canvas"></canvas>
          <div id="splash-container">
            <h1 id="title">INSIDE MUSIC</h1>
            <p id="featuring">featuring</p>
            <div id="enter-vr-container" style={{ color: "#ffffff" }}>
              <br />
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
                What if you could step inside a song? This is a simple
                experiment that explores that idea. See and hear the individual
                layers of music all around you to get a closer look at how music
                is made.
              </p>
            </div>
          </div>
        </div>
        <div id="exitButton"></div>
      </div>
    );
  }
}

export default PeriodicTable;
