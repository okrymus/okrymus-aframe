import React, { Component } from "react";
import initSplash from "./splash/Splash";
import initAscene from "./initAscene";
import "../../styles/splash";
import AframeContent from "./ascene";
import "../../styles/exit.scss";
import { isMobile, is360 } from "../../utils/Helpers";

// import ExitButton from "./interface/ExitButton";
class PeriodicTable extends Component {
  constructor() {
    super();
    // const element = document.querySelector("#exitButton");
  }
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

    const scene = document.querySelector("a-scene");

    scene.addEventListener("enter-360", () => this.show());
    scene.addEventListener("enter-vr", () => this.show());
    scene.addEventListener("exit-vr", () => this.hide());

    initSplash();
    initAscene();
  }

  show() {
    setTimeout(() => {
      if (!isMobile() || (isMobile() && is360())) {
        exitButton.classList.add("visible");
      }
    }, 10);
  }
  hide() {
    window.location.reload();
    exitButton.classList.remove("visible");
  }

  render() {
    return (
      <div>
        <AframeContent></AframeContent>
        <div id="splash" className="visible">
          <canvas id="splash-canvas"></canvas>
          <div id="splash-container">
            <h1 id="title">PERIODIC TABLE</h1>
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
              <h2 id="aboutTitle">CREATED BY PANUPONG LEENAWARAT</h2>

              <p>This is a simple experiment periodic table via webVR. </p>

              <h2 id="aboutTitle">How to play</h2>
              <p class="howToPlay">Use [W] [A] [S] [D] to move around</p>
              <p class="howToPlay">
                Mouseover any element in the table to reveal more information
                about each element
              </p>
              <p class="howToPlay">
                Left click any element in the periodic table to reveal an
                example model and more information.
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
