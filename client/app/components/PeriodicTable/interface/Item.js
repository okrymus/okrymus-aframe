AFRAME.registerComponent("table-item", {
  schema: {
    selected: {
      default: false,
      type: "boolean"
    },
    atomic_number: {
      type: "number"
    },
    symbol: {
      type: "string"
    },
    name: {
      type: "string"
    },
    atomic_weight: {
      type: "number"
    },
    boiling_point: {
      type: "number"
    },
    selected_item: {
      typr: "array"
    },
    color: {
      typr: "string"
    },
    electron_configuration: {
      typr: "string"
    },

    element_category: {
      typr: "string"
    }
  },
  init() {
    this.darkGray = "rgb(30, 30, 30)";
    this.selectedColor = "rgb(120, 120, 120)";
    this.lightGray = "rgb(80, 80, 80)";

    this.el.setAttribute(
      "material",
      `side: double; transparent:true; opacity: 0.5`
    );

    const width = (this._width = 800);
    const height = (this._height = 600);

    // scale it
    this.el.setAttribute("scale", `${0.6} ${(0.6 * height) / width} ${0.6}`);

    //border
    this.bgElement = document.createElement("a-plane");
    this.el.appendChild(this.bgElement);

    this.bgElement.setAttribute(
      "material",
      `shader: flat; color: ${this.darkGray}; side: double; transparent: true; opacity: 0.5`
    );
    this.bgElement.classList.add("selectable");

    //mouse events
    this.el.addEventListener("mouseenter", () => {
      this.bgElement.setAttribute("material", "color", this.data.color);
      symbol_example.setAttribute("value", this.data.symbol);
      name_example.setAttribute("value", this.data.name);
      atomic_mass_example.setAttribute("value", this.data.atomic_weight);
      atomic_number_example.setAttribute("value", this.data.atomic_number);
      boiling_point_example.setAttribute("value", this.data.boiling_point);
      display_plane.setAttribute("color", this.data.color);
      electron_configuration.setAttribute(
        "value",
        this.data.electron_configuration
      );
      element_category.setAttribute("value", this.data.element_category);
    });

    this.el.addEventListener("mouseleave", () => {
      if (this.data.selected) {
        this.bgElement.setAttribute("material", "color", this.selectedColor);
      } else {
        this.bgElement.setAttribute("material", "color", this.darkGray);
        symbol_example.setAttribute("value", this.data.selected_item[0]);
        name_example.setAttribute("value", this.data.selected_item[1]);
        atomic_mass_example.setAttribute("value", this.data.selected_item[2]);
        atomic_number_example.setAttribute("value", this.data.selected_item[3]);
        boiling_point_example.setAttribute("value", this.data.selected_item[4]);
        display_plane.setAttribute("color", this.data.selected_item[5]);
        electron_configuration.setAttribute(
          "value",
          this.data.selected_item[6]
        );

        element_category.setAttribute("value", this.data.selected_item[7]);
      }
    });

    //symbol
    const symbol = document.createElement("a-text");
    symbol.setAttribute("value", this.data.symbol);
    symbol.setAttribute("align", "center");
    symbol.setAttribute("material", "shader: flat");
    symbol.setAttribute("color", "white");
    symbol.setAttribute("wrap-count", 3);
    symbol.setAttribute("width", 1);
    symbol.setAttribute("side", "double");
    symbol.setAttribute(
      "scale",
      `${1 * 0.8} ${(width / height) * 0.8} ${1 * 0.8}`
    );
    symbol.setAttribute("position", "0 0 0");
    this.el.appendChild(symbol);

    const atomic_number = document.createElement("a-text");
    atomic_number.setAttribute("value", this.data.atomic_number);
    atomic_number.setAttribute("align", "left");
    atomic_number.setAttribute("material", "shader: flat");
    atomic_number.setAttribute("color", "white");
    atomic_number.setAttribute("wrap-count", 6);
    atomic_number.setAttribute("width", 1);
    atomic_number.setAttribute("height", 0.31);
    atomic_number.setAttribute("side", "double");
    atomic_number.setAttribute(
      "scale",
      `${1 * 0.7} ${(width / height) * 0.7} ${1 * 0.7}`
    );

    atomic_number.setAttribute("position", "-0.5 0.3 0");
    this.el.appendChild(atomic_number);
  },
  update() {
    this.bgElement.setAttribute(
      "material",
      "color",
      this.data.selected ? this.selectedColor : this.darkGray
    );
  }
});
