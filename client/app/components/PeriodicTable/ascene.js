import oilTank from "../../static/models/oilTank.glb";

import React from "react";

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
    </a-assets>
    <a-gltf-model
      src="#oilTank"
      rotation="0 270 0"
      position="2.987 0.029 -1.175"
      scale="0.03 0.03 0.03"
    ></a-gltf-model>

    <a-gltf-model
      src="#oilTank"
      rotation="69.006 -28.993 77.742"
      position="2.814 0.318 -1.764"
      scale="0.03 0.03 0.03"
    ></a-gltf-model>

    <a-entity light="type: point; intensity: 5.34" postion="0 0.2 0"></a-entity>
    <a-entity
      position="-0.089 1.505 1.814"
      light="angle: 61.42; intensity: 6.9; penumbra: 1; type: spot; shadowBias: 1.37; shadowCameraFov: 92.73; shadowCameraNear: 1.67; shadowCameraTop: 6.26; shadowCameraRight: 5.78; shadowCameraBottom: -6.91; shadowCameraLeft: -3.34; shadowMapHeight: 510.62; decay: 1.48; distance: 6.63"
      rotation="-20.216815801191096 -1.6134491510883984 -1.588239008102642"
    ></a-entity>

    <a-entity
      position="-0.089 1.505 -1.81243"
      light="angle: 61.42; intensity: 6.9; penumbra: 1; type: spot; shadowBias: 1.37; shadowCameraFov: 92.73; shadowCameraNear: 1.67; shadowCameraTop: 6.26; shadowCameraRight: 5.78; shadowCameraBottom: -6.91; shadowCameraLeft: -3.34; shadowMapHeight: 510.62; decay: 1.48; distance: 6.63"
      rotation="-20.216815801191096 -175.96164142042224 -1.588239008102642"
    ></a-entity>

    <a-entity animation="property: rotation; to: 0 360 0; loop: true; dur: 20000">
      <a-entity
        id="exampleModel"
        gltf-model={require(`../../static/models/atom.glb`)}
        rotation="0 270 0"
        scale="0.5 0.5 0.5"
        position="0 0.2 0"
      ></a-entity>
    </a-entity>
    <a-entity
      camera
      listener
      look-controls
      wasd-controls="enabled:true;"
      position="0 2 -4"
    ></a-entity>
    <a-entity light="type: ambient; color: #CCC"></a-entity>
    <a-entity id="mouseCursor" cursor="rayOrigin: mouse"></a-entity>
    <a-entity
      menu
      position="-2.5 3 -4"
      scale="0.75 0.75 1"
      id="menu"
    ></a-entity>
    <a-entity block></a-entity>
    <a-cylinder
      position="0 0 0"
      radius="3.5"
      height="0.1"
      color="#ffffff"
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
    {/* <a-sky color="#6EBAA7"></a-sky> */}
    {/* <a-sky color="#ECECEC"></a-sky> */}
    <a-sky color="#000000"></a-sky>
    {/* <a-sky color="#FAFAFA"></a-sky> */}
    {/* control */}
    {/* <a-entity controls></a-entity> */}
  </a-scene>
);

export default AframeContent;
