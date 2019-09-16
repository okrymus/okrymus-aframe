import oilTank from "../../static/models/oilTank.glb";
import atom from "../../static/models/atom.glb";

import React from "react";
// import oilTank from "../../static/models/oilTank.glb";

const AframeContent = () => (
  <a-scene
    renderer="antialias: true"
    loading
    webvr-ui
    splash
    vr-mode-ui="enabled: false"
  >
    <a-assets>
      <a-asset-item id="oilTank" src={oilTank}></a-asset-item>
      <a-asset-item id="atom" src={atom}></a-asset-item>
    </a-assets>
    <a-gltf-model
      src="#oilTank"
      rotation="0 270 0"
      scale="0.03 0.03 0.03"
    ></a-gltf-model>

    <a-gltf-model
      src="#atom"
      rotation="0 270 0"
      scale="0.1 0.1 0.1"
      position="0 1.5 0"
    ></a-gltf-model>

    <a-entity light="color: #AFA; intensity: 1.5" position="-1 1 0"></a-entity>

    <a-entity
      camera
      listener
      look-controls
      wasd-controls="enabled:true;"
      position="0 2 -4"
    ></a-entity>

    <a-entity light="type: ambient; color: #CCC"></a-entity>

    <a-entity id="mouseCursor" cursor="rayOrigin: mouse"></a-entity>

    <a-entity menu position="-2.5 3 -4" scale="0.75 0.75 1" id="menu">
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

    {/* <a-box
      animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
      position="0 2 0"
      rotation="45 45 45"
      color="#4CC3D9"
    ></a-box> */}
    <a-cylinder
      position="0 0 0"
      radius="3.5"
      height="0.1"
      color="#ffffff"
    ></a-cylinder>

    {/* <a-cylinder
      animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
      color="cyan"
      material="side: double, transparent:true "
      opacity="0.5"
      position="0 0.5 0"
    ></a-cylinder> */}

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

    {/* <a-sky color="#6EBAA7"></a-sky> */}

    {/* <a-sky color="#ECECEC"></a-sky> */}
    <a-sky color="#000000"></a-sky>
    {/* <a-sky color="#FAFAFA"></a-sky> */}
    {/* control */}
    {/* <a-entity controls></a-entity> */}
  </a-scene>
);

export default AframeContent;
