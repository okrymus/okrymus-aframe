import * as webvrui from "webvr-ui";
import { isMobile, isTablet } from "../../../utils/Helpers";
import icon360 from "../../../assets/images/360_icon.svg";

export default function initSplash() {
  const aScene = document.querySelector("a-scene");
  const splash = document.querySelector("#splash");

  //this link is for when VR is available but user might want 360 instead
  const tryItIn360 = document.getElementById("try-it-in-360");
  const enterVRContainer = splash.querySelector("#enter-vr-container");

  // create the webvr-ui Button
  const enterVRButton = new webvrui.EnterVRButton(null, {
    color: "#ffffff",
    corners: "square",
    onRequestStateChange: state => {
      return true;
    },
    textEnterVRTitle: "loading".toUpperCase()
  });

  enterVRButton.domElement.addEventListener(
    "click",
    () => enterVRButton.setTitle("WAITING"),
    true
  );

  //create the Enter 360 Button that is full-size and replaces Enter VR
  function createEnter360Button() {
    enterVRContainer.innerHTML = "";
    const enter360 = document.createElement("button");
    enter360.classList.add("webvr-ui-button");
    enter360.style.color = "white";
    enter360.innerHTML = `<div class="webvr-ui-title" style="padding: 0;">LOADING</div>`;
    enterVRContainer.appendChild(enter360);
    enter360.addEventListener("click", onEnter360);
    tryItIn360.style.display = "none";
    return enter360;
  }

  // this can happen by "Enter 360" or "Try it in 360"
  function onEnter360() {
    splash.classList.remove("visible");
    aScene.play();
    aScene.emit("enter-360");
  }

  if (isTablet()) {
    createEnter360Button();
  }

  enterVRButton.on("ready", () => {
    enterVRButton.domElement.style.marginBottom = "10px";
    if (!isTablet()) {
      enterVRContainer.insertBefore(
        enterVRButton.domElement,
        enterVRContainer.firstChild
      );
    }
    tryItIn360.style.display = "inline-block";
  });

  enterVRButton.on("enter", () => {
    splash.classList.remove("visible");
    aScene.play();
    aScene.enterVR();
  });

  enterVRButton.on("exit", () => {
    aScene.exitVR();
    aScene.pause();
    splash.classList.add("visible");
  });

  enterVRButton.on("error", () => {
    if (
      enterVRButton.state === webvrui.State.ERROR_NO_PRESENTABLE_DISPLAYS ||
      enterVRButton.state === webvrui.State.ERROR_BROWSER_NOT_SUPPORTED
    ) {
      createEnter360Button();
    }
  });

  if (aScene.hasLoaded) {
    run();
  } else {
    aScene.addEventListener("loaded", run);
  }

  function run() {
    enterVRButton.sourceCanvas = aScene.renderer.domElement;
    //dont run the aScene in the background
    aScene.pause();
    //add the loaded events
    tryItIn360.addEventListener("click", onEnter360);

    enterVRContainer.classList.add("ready");

    if (
      enterVRButton.state === webvrui.State.READY_TO_PRESENT &&
      !(isMobile() && isTablet())
    ) {
      enterVRButton.setTitle("Enter VR".toUpperCase());
    } else if (
      isTablet() ||
      (enterVRButton.state || "").indexOf("error") >= 0
    ) {
      document.querySelector(".webvr-ui-title").innerHTML =
        "<img src=" + icon360 + "><span>ENTER 360</span>";
      document.querySelector(".webvr-ui-title").classList.add("mode360");
    }
  }
}
