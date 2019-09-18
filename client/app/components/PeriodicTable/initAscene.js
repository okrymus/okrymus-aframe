import "./interface/Menu";
import "./interface/Block";

export default function initAScene() {
  const [sceneEl] = ["a-scene"].map(q => document.querySelector(q));

  sceneEl.addEventListener("enter-360", () => {
    document.querySelector("a-scene").classList.add("is360");
  });
}
