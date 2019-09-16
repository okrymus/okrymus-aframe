import "aframe";

AFRAME.registerComponent("info", {
  schema: {
    atomic_number: {
      type: "number"
    },
    name_symbol: {
      type: "string"
    },
    pronunciation: {
      type: "string"
    }
  },

  init() {
    const aScene = document.querySelector("a-scene");
    console.log(this.data.atomic_number);
    console.log(this.data.name_symbol);
    this.el.innerHTML = `<a-entity geometry="primitive: cylinder; radius: 8; height: 6; segmentsRadial: 48; thetaLength: -160; openEnded: true" material="shader: html; target: #texture; side: double; width: 2000; height: 2000; transparent: true" update-repeat position="0 2 0" rotation="0 -00 0"></a-entity>`;
    // var curvetext = document.createElement("a-entity");
    // curvetext.setAttribute(
    //   geometry,
    //   "primitive: cylinder; radius: 3; height: 3; segmentsRadial: 48; thetaLength: -160; openEnded: true"
    // );
    // curvetext.setAttribute(
    //   material,
    //   "shader: html; target: #texture; side: double; width: 500; height: 300; transparent: true"
    // );
    // curvetext.setAttribute(position, "0 0 -4");
    // curvetext.setAttribute(rotation, "0 -90 0");
    // curvetext.setAttribute("update-repeat");

    console.log(aScene);

    //text
    const text = document.createElement("a-text");
    const textScale = 5;
    text.setAttribute("value", this.data.name_symbol);
    text.setAttribute("align", "center");
    text.setAttribute("material", "shader: flat");
    text.setAttribute("color", "white");
    text.setAttribute("wrap-count", 20);
    text.setAttribute("width", 1);
    text.setAttribute("side", "double");
    text.setAttribute("scale", "5 5 1");
    text.setAttribute("position", "-2.5 3 -4");
    text.setAttribute("rotation", "0 0 0");
    this.el.appendChild(text);
    //text
  }
});

// AFRAME.registerComponent("update-repeat", {
//   dependencies: ["material"],

//   init: function() {
//     var texture = this.el.components.material.material.map;
//     texture.repeat = new THREE.Vector2(-1, 1);
//     texture.needsUpdate = true;
//   }
// });
