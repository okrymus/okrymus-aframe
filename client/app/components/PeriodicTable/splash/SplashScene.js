import React, { Component } from "react";

class SplashScene extends Component {
  constructor(props) {
    super(props);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.001,
      10000
    );
    camera.position.set(0, -10, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    const renderer = new THREE.WebGLRenderer({ props });
    renderer.setClearColor(0x00, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // const camera = new THREE.PerspectiveCamera(
    //   65,
    //   window.innerWidth / window.innerHeight,
    //   0.001,
    //   10000
    // );
    // camera.position.set(0, -10, 0);
    // camera.lookAt(new THREE.Vector3(0, 0, 0));
    // const renderer = new THREE.WebGLRenderer({ props });
  }
  start() {
    console.log("splach start");
  }

  close() {
    console.log("splach close");
  }
  render() {
    return <div></div>;
  }
}

export default SplashScene;
