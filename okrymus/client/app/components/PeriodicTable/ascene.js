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

    <a-entity
      light="type: point; intensity: 0.75; distance: 50; decay: 2"
      position="0 5 10"
    ></a-entity>

    <div
      id="texture"
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        left: "0",
        top: "0",
        zIndex: "-1",
        overflow: "hidden"
      }}
    >
      <p
        style={{
          position: "relative",
          top: "20px",
          fontSize: "100px",
          color: "white"
        }}
      >
        HELLO HELLO
      </p>
      <p
        style={{
          position: "relative",
          top: "20px",
          fontSize: "48px",
          color: "white"
        }}
      >
        curvy text
      </p>
    </div>

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
      color="#ffffff"
    ></a-cylinder>

    <a-cylinder
      animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
      color="cyan"
      material="side: double, transparent:true "
      opacity="0.5"
      position="0 0.5 0"
    ></a-cylinder>

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

    <a-entity
      id="mouseCursor"
      cursor="rayOrigin: mouse"
      raycaster="objects: #box"
    ></a-entity>

    {/* <a-sky color="#ECECEC"></a-sky> */}
    <a-sky color="#FAFAFA"></a-sky>
    {/* control */}
    {/* <a-entity controls></a-entity> */}
  </a-scene>
);

export default AframeContent;
