/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import "aframe";

AFRAME.registerComponent("menu-item", {
  schema: {
    atomic_number: {
      type: "number"
    },
    symbol: {
      type: "string"
    },

    color: {
      type: "color"
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

    const opacity = 1;

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
      // bgElement.setAttribute('material', 'opacity', 1)
    });
    this.el.addEventListener("mouseleave", () => {
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

  // _makeBorder(entered) {
  //   const context = this._context;
  //   const width = this._width;
  //   const height = this._height;
  //   const borderWidth = entered ? 20 : 10;
  //   context.lineWidth = borderWidth;
  //   context.clearRect(0, 0, width, width);
  //   const yOffset = (width - height) / 2;
  //   const padding = 6;
  //   const halfBorder = borderWidth / 2;
  //   context.strokeRect(
  //     padding + halfBorder,
  //     0 + padding + halfBorder,
  //     width - padding * 2 - halfBorder * 2,
  //     height - padding * 2 - halfBorder * 2
  //   );
  // },

  update() {
    this.bgElement.setAttribute(
      "material",
      "color",
      this.data.selected ? this.selectedColor : this.darkGray
    );
  }
});
