import "aframe";

AFRAME.registerComponent("info", {
  schema: {
    atomic_number: {
      type: "number"
    },
    symbol: {
      type: "string"
    },
    atomic_weight: {
      type: "number"
    },
    boiling_point: {
      type: "number"
    },
    name: {
      type: "string"
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

    document.getElementById("symbol").setAttribute("value", this.data.symbol);
    document.getElementById("name").setAttribute("value", this.data.name);
    document
      .getElementById("atomic_weight")
      .setAttribute("value", this.data.atomic_weight);
    document
      .getElementById("atomic_number")
      .setAttribute("value", this.data.atomic_number);
    document
      .getElementById("boiling_point")
      .setAttribute("value", this.data.boiling_point);

    document
      .getElementById("exampleModel")
      .setAttribute(
        "gltf-model",
        require(`../../../static/models/${this.data.name}.glb`)
      );

    console.log(aScene);
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
