import React from "react";

const AframeContent = () => (
  <a-scene
    renderer="antialias: true"
    fog="color: #000000; near: 0.1; far: 5;"
    loading
    webvr-ui
    splash
    vr-mode-ui="enabled: false"
    controls
  >
    <a-entity
      camera
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

    {/* control */}
    <a-entity controls></a-entity>
  </a-scene>
);

export default AframeContent;
