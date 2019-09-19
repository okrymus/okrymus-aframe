import "../interface/Example";

AFRAME.registerComponent("menu-item", {
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
    color: {
      type: "color"
    },
    element_category: {
      type: "string"
    },
    selected: {
      default: false,
      type: "boolean"
    }
  },

  init() {
    this.darkGray = "rgb(30, 30, 30)";
    this.selectedColor = "rgb(60, 60, 60)";
    this.lightGray = "rgb(80, 80, 80)";

    this.el.setAttribute(
      "material",
      `side: double; transparent:true; opacity: 0.5`
    );
    const width = (this._width = 800);
    const height = (this._height = 600);

    // scale it
    const scaling = 0.6;
    this.el.setAttribute(
      "scale",
      `${scaling} ${(scaling * height) / width} ${scaling}`
    );
    console.log(this.data.element_category);
    //text
    const text = document.createElement("a-text");
    const textScale = 0.8;
    text.setAttribute("value", this.data.symbol);
    text.setAttribute("align", "center");
    text.setAttribute("material", "shader: flat");
    text.setAttribute("color", "white");
    text.setAttribute("wrap-count", 3);
    text.setAttribute("width", 1);
    text.setAttribute("side", "double");
    text.setAttribute(
      "scale",
      `${1 * textScale} ${(width / height) * textScale} ${1 * textScale}`
    );
    text.setAttribute("position", "0 0 0");
    this.el.appendChild(text);

    const subTextScale = 0.7;
    const subText = document.createElement("a-text");
    subText.setAttribute("value", this.data.atomic_number);
    subText.setAttribute("align", "left");
    subText.setAttribute("material", "shader: flat");
    subText.setAttribute("color", "white");
    subText.setAttribute("wrap-count", 6);
    subText.setAttribute("width", 1);
    subText.setAttribute("height", 0.31);
    subText.setAttribute("side", "double");
    subText.setAttribute(
      "scale",
      `${1 * subTextScale} ${(width / height) * subTextScale} ${1 *
        subTextScale}`
    );

    subText.setAttribute("position", "-0.5 0.3 0");
    this.el.appendChild(subText);

    //border
    const bgElement = (this.bgElement = document.createElement("a-plane"));
    this.el.appendChild(bgElement);

    bgElement.setAttribute(
      "material",
      `shader: flat; color: ${this.darkGray}; side: double; transparent: true; opacity: 0.5`
    );
    bgElement.classList.add("selectable");

    //mouse events
    this.el.addEventListener("mouseenter", () => {
      bgElement.setAttribute("material", "color", this.lightGray);

      var elementExists = document.getElementById("example");
      if (!elementExists) {
        const example = document.createElement("a-entity");
        example.setAttribute("example", {
          atomic_number: this.data.atomic_number,
          name: this.data.name,
          name_symbol: this.data.name_symbol,
          atomic_weight: this.data.atomic_weight,
          boiling_point: this.data.boiling_point,
          symbol: this.data.symbol,
          pronunciation: this.data.pronunciation,
          element_category: this.data.element_category
        });
        const aScene = document.querySelector("a-scene");

        aScene.appendChild(example);
        example.id = "testExample";
      }
    });

    this.el.addEventListener("mouseleave", () => {
      var elementExists = document.getElementById("testExample");
      if (elementExists) {
        elementExists.remove();
      }
      if (this.data.selected) {
        bgElement.setAttribute("material", "color", this.selectedColor);
      } else {
        bgElement.setAttribute("material", "color", this.darkGray);
      }
    });

    //unselect the item when the song is over
    this.el.sceneEl.addEventListener("song-end", () => {
      this.el.setAttribute("menu-item", "selected", false);
    });
  },

  update() {
    this.bgElement.setAttribute(
      "material",
      "color",
      this.data.selected ? this.selectedColor : this.darkGray
    );
  }
});
