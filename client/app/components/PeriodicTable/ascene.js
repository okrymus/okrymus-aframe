import React from "react";

const AframeContent = () => (
  <a-scene
    renderer="antialias: true"
    fog="color: #000000; near: 0.1; far: 5;"
    loading
    webvr-ui
    splash
    vr-mode-ui="enabled: false"
  >
    <a-entity
      camera
      listener
      look-controls
      wasd-controls="enabled:true;"
      position="0 2 -4"
    ></a-entity>

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

    <a-box
      animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
      position="0 2 0"
      rotation="45 45 45"
      color="#4CC3D9"
    ></a-box>
    <a-cylinder
      position="0 0 0"
      radius="3.5"
      height="0.1"
      color="#FFC65D"
    ></a-cylinder>

    <a-cylinder
      animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
      color="cyan"
      material="side: double, transparent:true "
      open-ended="true"
      opacity="0.5"
      position="0 0.5 0"
    ></a-cylinder>

    <a-sky color="#ECECEC"></a-sky>
    {/* control */}
    {/* <a-entity controls></a-entity> */}
  </a-scene>
);

export default AframeContent;
