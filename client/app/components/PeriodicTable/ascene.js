import React, { Component } from "react";
import { isMobile, is360 } from "../../utils/Helpers";
import oilTank from "../../assets/models/oilTank.glb";

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
        <a-assets>
          <a-asset-item id="oilTank" src={oilTank}></a-asset-item>
        </a-assets>

        <a-gltf-model
          src="#oilTank"
          rotation="0 270 0"
          position="-0.003 0.029 2.964"
          scale="0.03 0.025 0.025"
        ></a-gltf-model>

        <a-gltf-model
          src="#oilTank"
          rotation="75.476 38.674 97.710"
          position="-0.330 0.272 2.964"
          scale="0.03 0.025 0.025"
        ></a-gltf-model>

        <a-entity
          table
          position="-2.5 3 -4"
          scale="0.75 0.75 1"
          id="table"
        ></a-entity>

        <a-entity
          gltf-model={require(`../../assets/models/whiteboard.glb`)}
          rotation="0 85 0"
          position="-2.7 0 0"
        >
          <a-text
            value="Electron configuration & category "
            // position="-0.757 1.993 0.056"
            position="-1.064 2.382 0.056"
            scale="0.6 0.6 0.6"
            side="double"
          ></a-text>
          <a-text
            id="electron_configuration"
            value=""
            wrap-count="20"
            width="1.5"
            position="-0.9 1.993 0.056"
            // position="-1.064 2.382 0.056"
            scale="0.8 0.8 0.8"
            color="black"
          ></a-text>
          <a-text
            id="element_category"
            value=""
            position="-0.9 1.7 0.056"
            wrap-count="20"
            width="1.5"
            // position="-1.064 2.382 0.056"
            // scale="0.6 0.6 0.6"
            color="black"
          ></a-text>
        </a-entity>

        <a-entity display id="display">
          <a-plane
            id="display_plane"
            position="-0.788 4.1 -4"
            rotation="0 0 0"
            height="5"
            width="5"
            scale="0.5 0.5 0.5"
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
              scale="2.5 2.5 2.5"
              position="-2.3 1.9 0"
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
              scale="2.5 2.5 2.5"
              position="2.3 1.9 0"
            ></a-text>
          </a-plane>
        </a-entity>

        <a-entity
          gltf-model={require(`../../assets/models/scientist.glb`)}
          rotation="0 270 0"
          position="2.7 0 0"
        >
          <a-text
            id="discovery"
            value="Discovery"
            color="black"
            wrap-count="30"
            width="3"
            position="-0.419 1.216 0.69"
            rotation="-17.761 0 0"
            scale="0.195 0.224 0.990"
          ></a-text>
        </a-entity>

        <a-entity
          rotation="0 0 0"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 20000"
        >
          <a-entity position="5.0 5 0">
            <a-text
              value="WELCOME"
              scale="3 3 1"
              color="cyan"
              rotation="0 250 0"
            ></a-text>
          </a-entity>
          <a-entity position="5.0 0.1 0">
            <a-text
              value="click any element to see more information"
              scale="0.8 0.8 1"
              color="cyan"
              rotation="0 250 0"
            ></a-text>
          </a-entity>
        </a-entity>

        <a-cylinder
          position="0 0 0"
          radius="3.5"
          height="0.1"
          color="#ffffff"
        ></a-cylinder>

        {/* <a-sky color="#ECECEC"></a-sky> */}
        <a-sky color="#000000"></a-sky>

        <a-entity id="mouseCursor" cursor="rayOrigin: mouse"></a-entity>
      </a-scene>
    );
  }
}

export default AframeContent;
