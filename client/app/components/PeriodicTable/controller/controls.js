import "aframe";
import animitter from "animitter";
import {
  isDaydream,
  empty,
  valueExists,
  values,
  is360,
  isMobile,
  pluck,
  diff
} from "../../../utils/Helpers";

const types = {
  CURSOR: "cursor-controller",
  DAYDREAM: "Daydream Controller",
  //if its not the controller version (just touchpad), use retical
  GEAR: "Gear VR Controller",
  RETICAL: "retical-controller",
  VIVE: "OpenVR Gamepad",
  OCULUS_TOUCH_LEFT: "Oculus Touch (Left)",
  OCULUS_TOUCH_RIGHT: "Oculus Touch (Right)"
};

/**
 * the component names to mount for each controller type
 */
const components = {
  [types.CURSOR]: "mouse-controller",
  [types.DAYDREAM]: "custom-geavr-controller",
  [types.GEAR]: "custom-gearvr-controller",
  [types.RETICAL]: "retical-controller",
  [types.VIVE]: "custom-six-dof-controller",
  [types.OCULUS_TOUCH_LEFT]: "custom-six-dof-controller",
  [types.OCULUS_TOUCH_RIGHT]: "custom-six-dof-controller"
};

// function findControllers() {
//   console.log("findControllers");
//   //   console.log("desktop  " + !AFRAME.utils.device.checkHeadsetConnected());
//   //   console.log("mobilevr  " + AFRAME.utils.device.isMobileVR());
//   //   console.log("mobile  " + AFRAME.utils.device.isMobile());

//   if (AFRAME.utils.device.isMobileVR()) {
//     if (AFRAME.utils.device.isGearVR()) {
//       console.log("Gear VR");
//     }
//     if (AFRAME.utils.device.isOculusGo()) {
//       console.log("OculusGo");
//     }
//   } else {
//     // console.log("desktop/mobile");
//   }
// }

function _getGamePad() {
  let vrGamepad = null;

  if (!navigator.getGamepads()) {
    return vrGamepad;
  }
  let gamepads = navigator.getGamepads();
  for (let i = 0; i < gamepads.length; ++i) {
    let gamepad = gamepads[i];
    if (gamepad) {
      return gamepad;
    }
  }

  return null;
}

var controllerExists = "";
const shouldGetRetical = () => {
  AFRAME.utils.device.isMobile() && !is360() && !isDaydream();
};

const shouldGetCursor = () => is360();

AFRAME.registerComponent("controls", {
  schema: {},

  init() {
    // this.controllerExists = ["true"];
    this.updateControls = this.updateControls.bind(this);

    console.log(controllerExists);
    //check frequently to see if controls have changed
    this.scheduler = animitter({ fps: 2 });
    this.scheduler.on("update", this.updateControls);
    this.scheduler.start();
    // console.log(this.controllerExists);
  },

  updateControls() {
    let vrGamepad = _getGamePad();
    // console.log(controllerExists);
    // console.log(vrGamepad === controllerExists);
    // console.log(this.controllerExists);
    // console.log(vrGamepad);
    // if (vrGamepad !== controllerExists)
    const changed = vrGamepad != controllerExists;
    if (changed) {
    }

    if (!vrGamepad) {
      //   console.log(vrGamepad);
      //   console.log(shouldGetCursor());
      if (shouldGetRetical()) {
        console.log("shouldGetRetical");
      } else if (shouldGetCursor()) {
        // this.el.setAttribute(components[types.CURSOR], true);
        // this.el.appendChild(this.createCursorController());
        // this.createCursorController();
        this.el.setAttribute(components[types.CURSOR], true);
        // console.log(this.el);

        // console.log("shouldGetCursor");
      }

      controllerExists = vrGamepad;

      return;
    }
    controllerExists = vrGamepad;
    // console.log("updateControls");
    // console.log(vrGamepad);
    // console.log(AFRAME.utils.device.isMobile());
  }
});

/**
 * mouse-controller component
 */
AFRAME.registerComponent("mouse-controller", {
  init: function() {
    const mouseCursor = document.createElement("a-entity");
    mouseCursor.setAttribute("mouse-cursor", true);
    document.querySelector("a-scene").appendChild(mouseCursor);
    console.log("mouse-controller");
    setTimeout(() => {
      this.el.setAttribute(
        "ray-intersection-emitter",
        `
                updatePositions: true;
                front: [mouse-cursor];
                back: [camera];
                touch:${isMobile()};
            `
      );
    }, 10);
    // console.log(document.querySelector("a-scene"));
  }
});
