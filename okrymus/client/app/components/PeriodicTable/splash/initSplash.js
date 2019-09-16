// import * as webvrui from "webvr-ui";
// import Tone from "tone";
// const camPos = { x: 0, y: 0, z: 0 };

// export default function initSplash() {
//   const splash = document.querySelector("#splash");
//   const enterContainerEl = document.querySelector("#enter-container");

//   // create the webvr-ui Button
//   const enterVRButton = new webvrui.EnterVRButton(null, {
//     color: "#ffffff",
//     corners: "square",
//     onRequestStateChange: state => {
//       // if(state === webvrui.State.PRESENTING){
//       // 	enterVRButton.setTitle('WAITING');
//       // }
//       return true;
//     },
//     textEnterVRTitle: "loading".toUpperCase()
//   });

//   function createEnter360Button() {
//     const enter360 = document.createElement("button");
//     enter360.classList.add("webvr-ui-button");
//     enter360.style.color = "white";
//     enter360.addEventListener("click", onEnter360);
//     return enter360;
//   }

//   function onEnter360() {
//     splash.classList.remove("visible");
//     console.log("onEnter360");
//   }

//   function _progressBar() {
//     const promises = [];
//     let asset;

//     for (let i = 0; i < document.querySelectorAll("a-asset-item").length; i++) {
//       asset = document.querySelectorAll("a-asset-item")[i];
//       if (!asset.data) {
//         promises.push(
//           new Promise(done => {
//             asset.addEventListener("loaded", done);
//           })
//         );
//       }
//     }
//     promises.push(
//       new Promise(done => {
//         Tone.Buffer.on("load", done);
//       })
//     );
//     _allLoaded();
//   }

//   function _allLoaded() {
//     splash
//       .querySelector("#enter-360")
//       .addEventListener("click", () => this._entered("360"));
//   }

//   createEnter360Button();
//   _progressBar();
// }
