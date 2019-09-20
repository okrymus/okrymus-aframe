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
