import "aframe";
import { trackConfig, supported } from "../Config";
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

      //unselect the previous track
      plane.addEventListener("click", () => {
        if (Date.now() - lastClick > 500) {
          lastClick = Date.now();
        } else {
          return;
        }

        this.el.setAttribute("menu", "shrink", true);

        if (!plane.getAttribute("menu-item").selected) {
          const trackClone = {};
          Object.assign(trackClone, element);
          this.el.emit("select", trackClone);
          this.el.sceneEl.emit("menu-selection", trackClone);
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
            pronunciation: element.pronunciation
          });
          info.id = "info";
          aScene.appendChild(info);
          currentSelection = plane;
        }
      });
    });

    this.el.sceneEl.addEventListener("song-end", () => {
      this.el.setAttribute("menu", "shrink", false);
    });
  },

  update() {
    if (this.data.shrink) {
      this.el.emit("shrink");
    } else {
      this.el.emit("grow");
    }
  }
});
