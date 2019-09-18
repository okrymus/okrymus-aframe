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
    element_category: {
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
    // console.log(this.data.atomic_number);
    // console.log(this.data.name_symbol);

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

    const element_category = document.createElement("a-text");
    element_category.setAttribute(
      "value",
      `Category\n${this.data.element_category}`
    );
    element_category.setAttribute("align", "left");
    element_category.setAttribute("material", "shader: flat");
    element_category.setAttribute("color", "white");
    element_category.setAttribute("wrap-count", 20);
    element_category.setAttribute("width", 1);
    element_category.setAttribute("height", 0.31);
    element_category.setAttribute("side", "double");
    element_category.setAttribute("position", "-8 3 -5");
    element_category.setAttribute("rotation", "0 90 0");
    this.el.appendChild(element_category);
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
