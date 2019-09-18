import "aframe";
import { supported } from "../Config";
import "./Item";
import "./Info";
let periodic_table = require("../../../static/json/periodic_table.json");
let UI_periodic_table = require("../../../static/json/UI_periodic_table.json");

AFRAME.registerComponent("menu", {
  schema: {
    shrink: {
      type: "boolean",
      default: false
    }
  },

  init() {
    if (!supported) {
      return;
    }

    this.el.id = "menu";

    this._itemWidth = 200;
    this._itemHeight = 200;

    let currentSelection = null;

    let lastClick = Date.now();

    periodic_table.forEach((element, i) => {
      const plane = document.createElement("a-entity");
      plane.setAttribute("menu-item", {
        atomic_number: element.atomic_number,
        name: element.name,
        name_symbol: element.name_symbol,
        atomic_weight: element.atomic_weight,
        boiling_point: element.boiling_point,
        symbol: element.symbol,
        pronunciation: element.pronunciation,
        element_category: element.element_category
      });
      this.el.appendChild(plane);

      plane.setAttribute(
        "position",
        `${UI_periodic_table[element.atomic_number]["positionX"] * 0.65 -
          2} ${-UI_periodic_table[element.atomic_number]["positionY"] * 0.5 +
          1} 0}`
      );

      //unselect the previous element
      plane.addEventListener("click", () => {
        if (Date.now() - lastClick > 500) {
          lastClick = Date.now();
        } else {
          return;
        }

        if (!plane.getAttribute("menu-item").selected) {
          if (currentSelection) {
            currentSelection.setAttribute("menu-item", "selected", false);
          }
          plane.setAttribute("menu-item", "selected", true);

          // remove info if exists
          var elementExists = document.querySelector("#info");
          if (elementExists) {
            elementExists.remove();
          }

          const aScene = document.querySelector("a-scene");

          const info = document.createElement("a-entity");
          info.setAttribute("info", {
            atomic_number: element.atomic_number,
            name: element.name,
            name_symbol: element.name_symbol,
            atomic_weight: element.atomic_weight,
            boiling_point: element.boiling_point,
            symbol: element.symbol,
            pronunciation: element.pronunciation,
            electron_configuration: element.electron_configuration,
            appearance: element.appearance,
            group_block: element.group_block,
            ionization_energies: element.ionization_energies,
            melting_point: element.melting_point,
            covalent_radius: element.covalent_radius,
            element_category: element.element_category,
            discovery: element.discovery,
            naming: element.naming,
            first_isolation: element.first_isolation
          });
          info.id = "info";
          aScene.appendChild(info);
          currentSelection = plane;
        }
      });
    });
  }
});
