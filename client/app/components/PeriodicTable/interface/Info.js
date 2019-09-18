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
    melting_point: {
      type: "number"
    },
    covalent_radius: {
      type: "number"
    },
    name: {
      type: "string"
    },
    element_category: {
      type: "string"
    },
    appearance: {
      type: "string"
    },
    group_block: {
      type: "string"
    },
    electron_configuration: {
      type: "string"
    },
    name_symbol: {
      type: "string"
    },
    ionization_energies: {
      type: "string"
    },
    pronunciation: {
      type: "string"
    },
    discovery: {
      type: "string"
    },
    naming: {
      type: "string"
    },
    first_isolation: {
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
    element_category.setAttribute("wrap-count", 30);
    element_category.setAttribute("width", 1);
    element_category.setAttribute("height", 0.31);
    element_category.setAttribute("side", "double");
    element_category.setAttribute("position", "0 4 5");
    element_category.setAttribute("rotation", "0 180 0");
    element_category.setAttribute("scale", "4 4 4");
    this.el.appendChild(element_category);

    const electron_configuration = document.createElement("a-text");
    electron_configuration.setAttribute(
      "value",
      `Electron configuration\n${this.data.electron_configuration}`
    );
    electron_configuration.setAttribute("align", "left");
    electron_configuration.setAttribute("material", "shader: flat");
    electron_configuration.setAttribute("color", "white");
    electron_configuration.setAttribute("wrap-count", 30);
    electron_configuration.setAttribute("width", 1);
    electron_configuration.setAttribute("height", 0.31);
    electron_configuration.setAttribute("side", "double");
    electron_configuration.setAttribute("position", "0 3 5");
    electron_configuration.setAttribute("rotation", "0 180 0");
    electron_configuration.setAttribute("scale", "4 4 4");
    this.el.appendChild(electron_configuration);

    const appearance = document.createElement("a-text");
    appearance.setAttribute("value", `Appearance\n${this.data.appearance}`);
    appearance.setAttribute("align", "left");
    appearance.setAttribute("material", "shader: flat");
    appearance.setAttribute("color", "white");
    appearance.setAttribute("wrap-count", 30);
    appearance.setAttribute("width", 1);
    appearance.setAttribute("height", 0.31);
    appearance.setAttribute("side", "double");
    appearance.setAttribute("position", "0 2 5");
    appearance.setAttribute("rotation", "0 180 0");
    appearance.setAttribute("scale", "4 4 4");
    this.el.appendChild(appearance);

    const group_block = document.createElement("a-text");
    group_block.setAttribute("value", `Group block\n${this.data.group_block}`);
    group_block.setAttribute("align", "left");
    group_block.setAttribute("material", "shader: flat");
    group_block.setAttribute("color", "white");
    group_block.setAttribute("wrap-count", 30);
    group_block.setAttribute("width", 1);
    group_block.setAttribute("height", 0.31);
    group_block.setAttribute("side", "double");
    group_block.setAttribute("position", "0 1 5");
    group_block.setAttribute("rotation", "0 180 0");
    group_block.setAttribute("scale", "4 4 4");
    this.el.appendChild(group_block);

    ////////
    const ionization_energies = document.createElement("a-text");
    ionization_energies.setAttribute(
      "value",
      `Ionization_energies\n${this.data.ionization_energies}`
    );
    ionization_energies.setAttribute("align", "right");
    ionization_energies.setAttribute("material", "shader: flat");
    ionization_energies.setAttribute("color", "white");
    ionization_energies.setAttribute("wrap-count", 30);
    ionization_energies.setAttribute("width", 1);
    ionization_energies.setAttribute("height", 0.31);
    ionization_energies.setAttribute("side", "double");
    ionization_energies.setAttribute("position", "1 4 5");
    ionization_energies.setAttribute("rotation", "0 180 0");
    ionization_energies.setAttribute("scale", "4 4 4");
    this.el.appendChild(ionization_energies);

    const boiling_point = document.createElement("a-text");
    boiling_point.setAttribute(
      "value",
      `Boiling_point\n${this.data.boiling_point}`
    );
    boiling_point.setAttribute("align", "right");
    boiling_point.setAttribute("material", "shader: flat");
    boiling_point.setAttribute("color", "white");
    boiling_point.setAttribute("wrap-count", 30);
    boiling_point.setAttribute("width", 1);
    boiling_point.setAttribute("height", 0.31);
    boiling_point.setAttribute("side", "double");
    boiling_point.setAttribute("position", "1 3 5");
    boiling_point.setAttribute("rotation", "0 180 0");
    boiling_point.setAttribute("scale", "4 4 4");
    this.el.appendChild(boiling_point);

    const melting_point = document.createElement("a-text");
    melting_point.setAttribute(
      "value",
      `Melting point\n${this.data.melting_point}`
    );
    melting_point.setAttribute("align", "right");
    melting_point.setAttribute("material", "shader: flat");
    melting_point.setAttribute("color", "white");
    melting_point.setAttribute("wrap-count", 30);
    melting_point.setAttribute("width", 1);
    melting_point.setAttribute("height", 0.31);
    melting_point.setAttribute("side", "double");
    melting_point.setAttribute("position", "1 2 5");
    melting_point.setAttribute("rotation", "0 180 0");
    melting_point.setAttribute("scale", "4 4 4");
    this.el.appendChild(melting_point);

    const covalent_radius = document.createElement("a-text");
    covalent_radius.setAttribute(
      "value",
      `Covalent_radius\n${this.data.covalent_radius}`
    );
    covalent_radius.setAttribute("align", "right");
    covalent_radius.setAttribute("material", "shader: flat");
    covalent_radius.setAttribute("color", "white");
    covalent_radius.setAttribute("wrap-count", 30);
    covalent_radius.setAttribute("width", 1);
    covalent_radius.setAttribute("height", 0.31);
    covalent_radius.setAttribute("side", "double");
    covalent_radius.setAttribute("position", "1 1 5");
    covalent_radius.setAttribute("rotation", "0 180 0");
    covalent_radius.setAttribute("scale", "4 4 4");
    this.el.appendChild(covalent_radius);

    ////////
    const discovery = document.createElement("a-text");
    discovery.setAttribute("value", `Discoverys\n${this.data.discovery}`);
    discovery.setAttribute("align", "center");
    discovery.setAttribute("material", "shader: flat");
    discovery.setAttribute("color", "white");
    discovery.setAttribute("wrap-count", 30);
    discovery.setAttribute("width", 1);
    discovery.setAttribute("height", 0.31);
    discovery.setAttribute("side", "double");
    discovery.setAttribute("position", "8 4 0");
    discovery.setAttribute("rotation", "0 270 0");
    discovery.setAttribute("scale", "4 4 4");
    this.el.appendChild(discovery);

    const naming = document.createElement("a-text");
    naming.setAttribute("value", `Naming\n${this.data.naming}`);
    naming.setAttribute("align", "center");
    naming.setAttribute("material", "shader: flat");
    naming.setAttribute("color", "white");
    naming.setAttribute("wrap-count", 30);
    naming.setAttribute("width", 1);
    naming.setAttribute("height", 0.31);
    naming.setAttribute("side", "double");
    naming.setAttribute("position", "8 3 0");
    naming.setAttribute("rotation", "0 270 0");
    naming.setAttribute("scale", "4 4 4");
    this.el.appendChild(naming);

    const first_isolation = document.createElement("a-text");
    first_isolation.setAttribute(
      "value",
      `First isolation\n${this.data.first_isolation}`
    );
    first_isolation.setAttribute("align", "center");
    first_isolation.setAttribute("material", "shader: flat");
    first_isolation.setAttribute("color", "white");
    first_isolation.setAttribute("wrap-count", 30);
    first_isolation.setAttribute("width", 1);
    first_isolation.setAttribute("height", 0.31);
    first_isolation.setAttribute("side", "double");
    first_isolation.setAttribute("position", "8 1 0");
    first_isolation.setAttribute("rotation", "0 270 0");
    first_isolation.setAttribute("scale", "4 4 4");
    this.el.appendChild(first_isolation);

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
