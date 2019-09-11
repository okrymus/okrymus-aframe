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
    if (!vrGamepad) {
      //   console.log(vrGamepad);
      controllerExists = vrGamepad;
      //   console.log(shouldGetCursor());
      if (shouldGetRetical()) {
        console.log("shouldGetRetical");
      } else if (shouldGetCursor()) {
        console.log("shouldGetCursor");
      }

      return;
    }
    console.log("updateControls");
    // console.log(vrGamepad);
    // console.log(AFRAME.utils.device.isMobile());
    controllerExists = vrGamepad;
  }
});
