import React, { Component } from "react";
import ReactDOM from "react-dom";

import initSplash from "./splash/Splash";
import initAFrameScene from "./init-aframe-scene";
import "../../styles/splash.scss";
import play from "./images/play.png";

class PeriodicTable extends Component {
  componentDidMount() {
    initSplash();
    initAFrameScene();
  }

  render() {
    return (
      <div>
        <a-scene
          antialias="true"
          fog="color: #000000; near: 0.1; far: 5;"
          loading
          vr-mode-ui="enabled: false"
        >
          <a-assets>
            <img id="play_button" src={play} />
            <img id="pause_button" src={require("./images/pause.png")} />
            <img id="info_button" src={require("./images/info.png")} />
          </a-assets>
          <a-entity
            camera="userHeight: 1.6; near:0.01;"
            listener
            look-controls
            wasd-controls="enabled:true;"
            position="0 0 0"
          ></a-entity>
          <a-entity menu position="0 2 -2" scale="0.75 0.75 1" id="menu">
            <a-animation
              begin="shrink"
              attribute="position"
              to="0 1.8 -2"
              dur="1000"
              easing="ease-out"
            ></a-animation>
            <a-animation
              begin="shrink"
              attribute="scale"
              to="0.5 0.5 1"
              dur="1000"
              easing="ease-out"
            ></a-animation>
            <a-animation
              begin="grow"
              attribute="position"
              to="0 2 -2"
              dur="2000"
              easing="ease-out"
            ></a-animation>
            <a-animation
              begin="grow"
              attribute="scale"
              to="0.75 0.75 1"
              dur="2000"
              easing="ease-out"
            ></a-animation>
          </a-entity>

          {/* <!-- play button --> */}
          <a-entity
            playbutton="playing:false; visible: false"
            position="0 1 -2"
            id="playButton"
            animate="attribute:scale; time:100;"
            rotation="90 0 0"
          >
            <a-entity>
              <a-plane
                src="#play_button"
                material="transparent: true"
                scale="0.9 0.9 0.9"
                position="0 0.5 0"
                rotation="-90 0 0"
              ></a-plane>
              <a-circle
                class="selectable"
                material="color: white; shader: flat;"
                rotation="-90 0 0"
              >
                <a-animation
                  begin="mouseenter"
                  attribute="material.color"
                  to="rgb(100, 100, 100)"
                  dur="0"
                ></a-animation>
                <a-animation
                  begin="mouseleave"
                  attribute="material.color"
                  to="white"
                  dur="0"
                ></a-animation>
              </a-circle>
              <a-cylinder
                material="color: rgb(80, 80, 80); shader: flat;"
                position="0 -0.52 0"
                rotation="0 0 0"
              ></a-cylinder>
              <a-animation
                begin="mousedown"
                attribute="scale"
                to="1 0.5 1"
                dur="100"
              ></a-animation>
              <a-animation
                begin="mousedown"
                attribute="position"
                to="0 -0.5 0"
                dur="100"
              ></a-animation>
              <a-animation
                begin="mouseup"
                attribute="scale"
                to="1 1 1"
                dur="100"
              ></a-animation>
              <a-animation
                begin="mouseup"
                attribute="position"
                to="0 0 0"
                dur="100"
              ></a-animation>
            </a-entity>
          </a-entity>

          <a-image
            id="loadingRing"
            src={require("./images/spinner5.png")}
            material="transparent: true"
            sprite-sheet="cols:12; rows: 12; progress: 0;"
            position="0 1 -2"
            scale="0.4 0.4 0.4"
            visible="false"
          >
            <a-animation
              attribute="sprite-sheet.progress"
              from="0"
              to="1"
              dur="2800"
              repeat="indefinite"
              easing="linear"
            ></a-animation>
            <a-animation
              attribute="rotation"
              from="0 0 0"
              to="0 0 160"
              dur="2800"
              repeat="indefinite"
              easing="linear"
            ></a-animation>
          </a-image>

          <a-sky bg-color="#000" color="#000"></a-sky>
          <a-entity shader-floor scale="1 1 1"></a-entity>
          <a-entity atmosphere position="0 0 0" scale="7 7 7"></a-entity>

          <a-entity tracks rotation="0 -180 0"></a-entity>
          <a-entity controls></a-entity>
        </a-scene>
        <div id="splash" className="visible">
          <canvas id="splash-canvas"></canvas>
          <div id="splash-container">
            <h1 id="title">Periodic Table</h1>

            <div id="enter-vr-container" style={{ color: "#ffffff" }}>
              <br />
              <div id="try-it-in-360" style={{ display: "none" }}>
                try it in 360
              </div>
            </div>
          </div>
          <div ref="openAbout" id="openAbout" className="aboutButton"></div>
          <div id="about">
            <div id="closeAbout" className="aboutButton"></div>
            <div id="content">
              <h2 id="aboutTitle">CREATED BY PANUPONG LEENAWARAT</h2>

              <p>
                What if you could step inside a song? This is a simple
                experiment that explores that idea. See and hear the individual
                layers of music all around you to get a closer look at how music
                is made.
              </p>
            </div>
          </div>
        </div>
        <div id="fallback">
          <div id="text">
            Oops. Sorry for the tech trouble. Try
            <a href="https://www.google.com/chrome/browser/">Chrome Browser</a>
            instead.
          </div>
        </div>
        <div id="exitButton"></div>
        <div id="insertHeadset">
          <img src={require("./images/insert_headset.gif")} />
        </div>
      </div>
    );
  }
}

export default PeriodicTable;
