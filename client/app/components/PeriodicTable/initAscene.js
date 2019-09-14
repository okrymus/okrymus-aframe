import "./interface/Menu";
// import "./controller/controls";
// import "./controller/controls";
// import "./controller/Controller";
// import "./controller/ray-intersection-emitter";

export default function initAScene() {
  const [menuEl, sceneEl, tracksEl] = [
    "a-entity[menu]",
    "a-scene",
    "a-entity[tracks]"
  ].map(q => document.querySelector(q));

  sceneEl.addEventListener("enter-360", () => {
    document.querySelector("a-scene").classList.add("is360");
  });

  menuEl.addEventListener("select", e => {
    console.log("starting", e.detail.artist);
  });
}
