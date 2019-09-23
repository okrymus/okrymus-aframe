import React, { Component } from "react";
import { isMobile, is360 } from "../../utils/Helpers";

class AframeContent extends Component {
  componentDidMount() {
    scene.addEventListener("enter-360", () => this.show());
    scene.addEventListener("enter-vr", () => this.show());
    scene.addEventListener("exit-vr", () => this.hide());

    scene.addEventListener("enter-360", () => {
      document.querySelector("a-scene").classList.add("is360");
    });

    const ballSpeed = 10.0;

    // window.addEventListener("click", function() {
    //   //MOVE THE EXISTING ORANGE
    //   const camPos = cam.object3D.position;
    //   var camLookVec = new THREE.Vector3();
    //   cam.getObject3D("camera").getWorldDirection(camLookVec);

    //   camLookVec.normalize();
    //   camLookVec.multiplyScalar(ballSpeed);

    //   orange.body.position.set(camPos.x, camPos.y, camPos.z);
    //   orange.body.velocity.set(camLookVec.x, camLookVec.y, camLookVec.z);
    // });

    var playerEl = document.querySelector("#camera");
    playerEl.addEventListener("collide", function(e) {
      console.log("Player has collided with body #" + e.detail.body.id);

      e.detail.target.el; // Original entity (playerEl).
      e.detail.body.el; // Other entity, which playerEl touched.
      e.detail.contact; // Stats about the collision (CANNON.ContactEquation).
      e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
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
      <a-scene physics="" id="scene" loading splash vr-mode-ui="enabled: false">
        {/* <a-camera id="cam" position="0 1.2 3">
          <a-entity
            cursor=""
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: black; shader: flat"
            position="0 0 -1"
          ></a-entity>
        </a-camera> */}

        <a-entity
          gltf-model={require(`../../assets/models/test.glb`)}
          rotation="0 0 0"
          position="0 0 0"
        ></a-entity>

        <a-camera id="camera" wasd-controls="fly:true">
          <a-box
            id="box1"
            static-body=""
            position="0 0 -1"
            width="0.1"
            height="0.1"
            depth="0.02"
          ></a-box>
        </a-camera>
        <a-box
          id="box2"
          dynamic-body=""
          position="5 -3.5 -5"
          width="1"
          height="1"
          depth="1"
        ></a-box>
        <a-plane
          static-body=""
          id="plane"
          color="#cac9f5"
          height="100"
          width="100"
          rotation="-90 0 0"
          position="0 -8 0"
        ></a-plane>

        <a-entity
          id="orange"
          dynamic-body=""
          velocity="0 0 -10"
          geometry="primitive: sphere; radius: 0.1"
          position="0 2 100.2"
          material="roughness: 0.48; color: #edaa45;"
          shadow="cast:true;receive:true"
        ></a-entity>

        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="4"
          height="4"
          color="#7BC8A4"
        ></a-plane>
        <a-sky color="#ECECEC"></a-sky>
        <a-box static-body="" color="red" position="0 0 -2" />
        <a-box static-body="" color="blue" position="2 0 -2" />
        <a-box static-body="shape: hull" color="green" position="-2 0 -2" />
        <a-box static-body="" color="purple" position="0 0 -4" />
        <a-box static-body="" color="salmon" position="0 0 0" />
        <a-box
          position="0 30 0"
          color="#66bd63"
          dynamic-body=""
          force-pushable
          shadow
        ></a-box>

        <a-plane static-body=""></a-plane>
      </a-scene>
    );
  }
}

export default AframeContent;
