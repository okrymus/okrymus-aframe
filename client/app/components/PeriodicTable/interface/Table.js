import "aframe";
import "./Item";

AFRAME.registerComponent("table", {
  init() {
    const element_category = {
      "diatomic nonmetal": "rgb(34, 255, 34)",
      "polyatomic nonmetal": "rgb(34, 255, 34)",
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

    this._itemWidth = 200;
    this._itemHeight = 200;

    this.periodic_table = require("../../../assets/json/periodic_table.json");
    this.UI_periodic_table = require("../../../assets/json/UI_periodic_table.json");

    let currentSelection = null;
    let selected_item = [
      "Symbol",
      "Name",
      "Atomic Mass",
      "Atomic number",
      "Boiling point",
      "rgb(255,255,255)",
      "",
      "",
      ""
    ];

    this.periodic_table.forEach((element, i) => {
      const plane = document.createElement("a-entity");
      plane.setAttribute("table-item", {
        atomic_number: element.atomic_number,
        symbol: element.symbol,
        name: element.name,
        atomic_weight: element.atomic_weight,
        boiling_point: element.boiling_point,
        selected_item: selected_item,
        color: element_category[element.element_category],
        electron_configuration: element.electron_configuration,
        element_category: element.element_category,
        discovery: element.discovery
      });

      this.el.appendChild(plane);

      plane.setAttribute(
        "position",
        `${this.UI_periodic_table[element.atomic_number]["positionX"] * 0.65 -
          2} ${-this.UI_periodic_table[element.atomic_number]["positionY"] *
          0.5 +
          1} 0}`
      );

      plane.addEventListener("click", () => {
        if (!plane.getAttribute("table-item").selected) {
          selected_item[0] = element.symbol;
          selected_item[1] = element.name;
          selected_item[2] = element.atomic_weight;
          selected_item[3] = element.atomic_number;
          selected_item[4] = element.boiling_point;
          selected_item[5] = element_category[element.element_category];
          selected_item[6] = element.electron_configuration;
          selected_item[7] = element.element_category;
          selected_item[8] = element.discovery;
          if (currentSelection) {
            currentSelection.setAttribute("table-item", "selected", false);
          }
          plane.setAttribute("table-item", "selected", true);
          plane.setAttribute("table-item", "selected_item", selected_item);

          currentSelection = plane;
        }
      });
    });
  }
});
