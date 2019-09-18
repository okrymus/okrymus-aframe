import "aframe";

AFRAME.registerComponent("example", {
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
    },
    element_category: {
      type: "string"
    }
  },
  init() {
    // console.log(this.data.symbol);
    const element_category = {
      "diatomic nonmetal": "rgb(34, 255, 34)",
      "polyatomic nonmetal, sometimes considered a metalloid":
        "rgb(34, 255, 34)",
      "noble gas": "rgb(199, 204, 255)",
      "alkali metal": "rgb(255, 204, 51)",
      "alkaline earth metal": "rgb(255,255,68)",
      metalloid: "rgb(119,221,136)",
      "metalloid, sometimes classified as a nonmetal, or a metal":
        "rgb(119,221,136)",
      "post-transition metal": "rgb(153,221,204)",
      "post-transition metal, but this status is disputed": "rgb(153,221,204)",
      "post-transition metal, sometimes considered a metalloid":
        "rgb(153,221,204)",

      "transition metal": "rgb(221, 187, 187)",
      "transition metal, alternatively considered a post-transition metal":
        "rgb(221, 187, 187)",

      lanthanide: "rgb(255, 187, 153)",
      "lanthanide, sometimes considered a transition metal":
        "rgb(255, 187, 153)",
      actinide: "rgb(238, 187, 221)",
      "actinide, sometimes considered a transition metal": "rgb(238, 187, 221)",
      "unknown, but probably a transition metal": "rgb(221, 221, 221)",
      "unknown, but probably a post-transition metal": "rgb(221, 221, 221)",
      "unknown, but predicted to be a noble gas": "rgb(221, 221, 221)"
    };

    const nameText = document.createElement("a-text");
    nameText.setAttribute("value", "Name");
    nameText.setAttribute("align", "left");
    nameText.setAttribute("material", "shader: flat");
    nameText.setAttribute("color", "white");
    nameText.setAttribute("wrap-count", 20);
    nameText.setAttribute("width", 1);
    nameText.setAttribute("side", "double");
    nameText.setAttribute("scale", "2 2 1");
    nameText.setAttribute("position", "-3.2 3.8 -4");
    nameText.setAttribute("rotation", "0 0 0");
    this.el.appendChild(nameText);

    //text
    const text = document.createElement("a-text");
    text.setAttribute("value", this.data.name_symbol);
    text.setAttribute("align", "left");
    text.setAttribute("material", "shader: flat");
    text.setAttribute("color", "white");
    text.setAttribute("wrap-count", 20);
    text.setAttribute("width", 1);
    text.setAttribute("side", "double");
    text.setAttribute("scale", "4.5 4.5 1");
    text.setAttribute("position", "-3.2 3.5 -4");
    text.setAttribute("rotation", "0 0 0");
    this.el.appendChild(text);
    //text

    //text
    const pronText = document.createElement("a-text");
    pronText.setAttribute("value", this.data.pronunciation);
    pronText.setAttribute("align", "left");
    pronText.setAttribute("material", "shader: flat");
    pronText.setAttribute("color", "white");
    pronText.setAttribute("wrap-count", 30);
    pronText.setAttribute("width", 1);
    pronText.setAttribute("side", "double");
    pronText.setAttribute("scale", "2 2 1");
    pronText.setAttribute("position", "-3.2 3.1 -4");
    pronText.setAttribute("rotation", "0 0 0");
    this.el.appendChild(pronText);

    const bgElement = document.createElement("a-plane");
    bgElement.setAttribute("position", "0.8 3.7 -4");
    bgElement.setAttribute("rotation", "0 0 0");
    bgElement.setAttribute(
      "material",
      `shader: flat; color: ${
        element_category[this.data.element_category]
      }; side: double; transparent: true; opacity: 1`
    );
    bgElement.setAttribute("height", "5");
    bgElement.setAttribute("width", "5");
    bgElement.setAttribute("scale", "0.3 0.3 0.3");
    bgElement.id = "example";
    this.el.appendChild(bgElement);

    const example = document.getElementById("example");
    const symbol = document.createElement("a-text");
    symbol.setAttribute("value", this.data.symbol);
    symbol.setAttribute("align", "center");
    symbol.setAttribute("material", "shader: flat");
    symbol.setAttribute("color", "black");
    symbol.setAttribute("wrap-count", 6);
    symbol.setAttribute("width", 1);
    symbol.setAttribute("height", 0.31);
    symbol.setAttribute("side", "double");
    symbol.setAttribute("scale", "5 5 5");
    symbol.setAttribute("position", "0 0 0");
    example.appendChild(symbol);

    const name = document.createElement("a-text");
    name.setAttribute("value", this.data.name);
    name.setAttribute("align", "center");
    name.setAttribute("material", "shader: flat");
    name.setAttribute("color", "black");
    name.setAttribute("wrap-count", 15);
    name.setAttribute("width", 1);
    name.setAttribute("height", 0.31);
    name.setAttribute("side", "double");
    name.setAttribute("scale", "4.5 4.5 4.5");
    name.setAttribute("position", "0 -1 0");
    example.appendChild(name);

    const atomic_weight = document.createElement("a-text");
    atomic_weight.setAttribute("value", this.data.atomic_weight);
    atomic_weight.setAttribute("align", "center");
    atomic_weight.setAttribute("material", "shader: flat");
    atomic_weight.setAttribute("color", "black");
    atomic_weight.setAttribute("wrap-count", 15);
    atomic_weight.setAttribute("width", 1);
    atomic_weight.setAttribute("height", 0.31);
    atomic_weight.setAttribute("side", "double");
    atomic_weight.setAttribute("scale", "4 4 4");
    atomic_weight.setAttribute("position", "0 -2 0");
    example.appendChild(atomic_weight);

    const atomic_number = document.createElement("a-text");
    atomic_number.setAttribute("align", "left");
    atomic_number.setAttribute("value", this.data.atomic_number);
    atomic_number.setAttribute("material", "shader: flat");
    atomic_number.setAttribute("color", "black");
    atomic_number.setAttribute("wrap-count", 7);
    atomic_number.setAttribute("width", 1);
    atomic_number.setAttribute("height", 0.31);
    atomic_number.setAttribute("side", "double");
    atomic_number.setAttribute("scale", "2 2 2");
    atomic_number.setAttribute("position", "-2.3 2 0");
    example.appendChild(atomic_number);

    const boiling_point = document.createElement("a-text");
    boiling_point.setAttribute("align", "right");
    boiling_point.setAttribute("value", this.data.boiling_point);
    boiling_point.setAttribute("material", "shader: flat");
    boiling_point.setAttribute("color", "black");
    boiling_point.setAttribute("wrap-count", 7);
    boiling_point.setAttribute("width", 1);
    boiling_point.setAttribute("height", 0.31);
    boiling_point.setAttribute("side", "double");
    boiling_point.setAttribute("scale", "2 2 2");
    boiling_point.setAttribute("position", "2.3 2 0");
    example.appendChild(boiling_point);

    // console.log(document.querySelector("a-scene"));
  }
});
