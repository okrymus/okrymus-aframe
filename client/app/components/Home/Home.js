import React, { Component } from "react";
import "../../styles/splash.scss";
import AframeContent from "./ascene";
import initSplash from "./splash/Splash";

class Home extends Component {
  componentDidMount() {
    //
    // About
    //
    openAbout.addEventListener("click", () => {
      about.classList.add("visible");
    });

    closeAbout.addEventListener("click", () => {
      about.classList.remove("visible");
    });

    //
    //  Exit
    //
    exitButton.addEventListener("click", () => {
      window.location.reload();
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
            <h1 id="title">OKRYMUS</h1>
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
              <h2 id="aboutTitle">VR</h2>
            </div>
          </div>
        </div>
        <div id="exitButton"></div>
      </div>
    );
  }
}

export default Home;
