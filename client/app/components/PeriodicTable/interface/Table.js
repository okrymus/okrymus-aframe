import "aframe";
import "./Item";

AFRAME.registerComponent("table", {
  init() {
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
      "Boiling point"
    ];

    this.periodic_table.forEach((element, i) => {
      const plane = document.createElement("a-entity");
      plane.setAttribute("table-item", {
        atomic_number: element.atomic_number,
        symbol: element.symbol,
        name: element.name,
        atomic_weight: element.atomic_weight,
        boiling_point: element.boiling_point,
        selected_item: selected_item
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
          if (currentSelection) {
            currentSelection.setAttribute("table-item", "selected", false);
          }
          plane.setAttribute("table-item", "selected", true);
          plane.setAttribute("table-item", "selectedItem", true);

          currentSelection = plane;
        }
      });
    });
  }
});
