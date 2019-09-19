import React, { Component } from "react";
import { isMobile, is360 } from "../../utils/Helpers";
import "./interface/Table";

class AframeContent extends Component {
  componentDidMount() {
    scene.addEventListener("enter-360", () => this.show());
    scene.addEventListener("enter-vr", () => this.show());
    scene.addEventListener("exit-vr", () => this.hide());

    scene.addEventListener("enter-360", () => {
      document.querySelector("a-scene").classList.add("is360");
    });
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
      <a-scene id="scene" loading webvr-ui splash vr-mode-ui="enabled: false">
        <a-entity
          table
          position="-2.5 3 -4"
          scale="0.75 0.75 1"
          id="table"
        ></a-entity>

        <a-entity display id="display">
          <a-plane
            position="0.8 3.6 -4"
            rotation="0 0 0"
            height="5"
            width="5"
            scale="0.3 0.3 0.3"
          >
            <a-text
              id="symbol_example"
              value="Symbol"
              align="center"
              material="shader: flat"
              color="black"
              wrap-count="6"
              width="1"
              height="0.31"
              side="double"
              scale="5 5 5"
              position="0 0 0"
            ></a-text>

            <a-text
              id="name_example"
              value="Name"
              align="center"
              material="shader: flat"
              color="black"
              wrap-count="15"
              width="1"
              height="0.31"
              side="double"
              scale="4.5 4.5 4.5"
              position="0 -1 0"
            ></a-text>
            <a-text
              id="atomic_mass_example"
              value="Atomic mass"
              align="center"
              material="shader: flat"
              color="black"
              wrap-count="15"
              width="1"
              height="0.31"
              side="double"
              scale="4 4 4"
              position="0 -2 0"
            ></a-text>

            <a-text
              id="atomic_number_example"
              value="Atomic number"
              align="left"
              material="shader: flat"
              color="black"
              wrap-count="7"
              width="1"
              height="0.31"
              side="double"
              scale="1.5 1.5 1.5"
              position="-2.3 2 0"
            ></a-text>

            <a-text
              id="boiling_point_example"
              value="Boiling point"
              align="right"
              material="shader: flat"
              color="black"
              wrap-count="7"
              width="1"
              height="0.31"
              side="double"
              scale="1.5 1.5 1.5"
              position="2.3 2 0"
            ></a-text>
          </a-plane>
        </a-entity>

        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-cylinder
          position="1 0.75 -3"
          radius="0.5"
          height="1.5"
          color="#FFC65D"
        ></a-cylinder>
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"
        ></a-plane>
        <a-sky color="#ECECEC"></a-sky>

        <a-entity id="mouseCursor" cursor="rayOrigin: mouse"></a-entity>
      </a-scene>
    );
  }
}

export default AframeContent;
