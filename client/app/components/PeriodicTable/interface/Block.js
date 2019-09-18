import "aframe";

AFRAME.registerComponent("block", {
  init() {
    const bgElement = document.createElement("a-plane");
    bgElement.setAttribute("position", "-8 3 0");
    bgElement.setAttribute("rotation", "0 90 0");
    bgElement.setAttribute(
      "material",
      "shader: flat; color: rgb(60, 50, 30); side: double; transparent: true; opacity: 0.5"
    );
    bgElement.id = "block";
    bgElement.setAttribute("height", "5");
    bgElement.setAttribute("width", "5");
    this.el.appendChild(bgElement);

    const block = document.getElementById("block");
    const symbol = document.createElement("a-text");
    symbol.setAttribute("value", "Symbol");
    symbol.setAttribute("align", "center");
    symbol.setAttribute("material", "shader: flat");
    symbol.setAttribute("color", "white");
    symbol.setAttribute("wrap-count", 6);
    symbol.setAttribute("width", 1);
    symbol.setAttribute("height", 0.31);
    symbol.setAttribute("side", "double");
    symbol.setAttribute("scale", "5 5 5");
    symbol.setAttribute("position", "0 0 0");
    symbol.id = "symbol";
    block.appendChild(symbol);

    const name = document.createElement("a-text");
    name.setAttribute("value", "Name");
    name.setAttribute("align", "center");
    name.setAttribute("material", "shader: flat");
    name.setAttribute("color", "white");
    name.setAttribute("wrap-count", 15);
    name.setAttribute("width", 1);
    name.setAttribute("height", 0.31);
    name.setAttribute("side", "double");
    name.setAttribute("scale", "4 4 4");
    name.setAttribute("position", "0 -1 0");
    name.id = "name";
    block.appendChild(name);

    const atomic_weight = document.createElement("a-text");
    atomic_weight.setAttribute("value", "Atomic mass");
    atomic_weight.setAttribute("align", "center");
    atomic_weight.setAttribute("material", "shader: flat");
    atomic_weight.setAttribute("color", "white");
    atomic_weight.setAttribute("wrap-count", 15);
    atomic_weight.setAttribute("width", 1);
    atomic_weight.setAttribute("height", 0.31);
    atomic_weight.setAttribute("side", "double");
    atomic_weight.setAttribute("scale", "4 4 4");
    atomic_weight.setAttribute("position", "0 -2 0");
    atomic_weight.id = "atomic_weight";
    block.appendChild(atomic_weight);

    const atomic_number = document.createElement("a-text");
    atomic_number.setAttribute("align", "left");
    atomic_number.setAttribute("value", "Atomic number");
    atomic_number.setAttribute("material", "shader: flat");
    atomic_number.setAttribute("color", "white");
    atomic_number.setAttribute("wrap-count", 7);
    atomic_number.setAttribute("width", 1);
    atomic_number.setAttribute("height", 0.31);
    atomic_number.setAttribute("side", "double");
    atomic_number.setAttribute("scale", "2 2 2");
    atomic_number.setAttribute("position", "-2.3 2 0");

    atomic_number.id = "atomic_number";
    block.appendChild(atomic_number);

    const boiling_point = document.createElement("a-text");
    boiling_point.setAttribute("align", "right");
    boiling_point.setAttribute("value", "Boiling point");
    boiling_point.setAttribute("material", "shader: flat");
    boiling_point.setAttribute("color", "white");
    boiling_point.setAttribute("wrap-count", 7);
    boiling_point.setAttribute("width", 1);
    boiling_point.setAttribute("height", 0.31);
    boiling_point.setAttribute("side", "double");
    boiling_point.setAttribute("scale", "2 2 2");
    boiling_point.setAttribute("position", "2.3 2 0");
    boiling_point.id = "boiling_point";
    block.appendChild(boiling_point);
  }
});
