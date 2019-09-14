import "aframe";

import "./Cursor";

/**
 * ray-intersection-emitter component,
 * casts a ray based on what elements are provided as `front` and `back`
 * and emits events based on intersecting with elements
 *
 * @event `'intersection-start'`
 * @event `'intersection-end'`
 */
AFRAME.registerComponent("ray-intersection-emitter", {
  dependencies: ["raycaster"],

  schema: {
    front: {
      type: "string"
    },
    back: {
      type: "string"
    },
    updatePositions: {
      type: "boolean",
      default: false
    },
    touch: {
      type: "boolean",
      default: false
    }
  },

  init() {
    this.el.setAttribute("cursor", "fuse : false");
    console.log(document.querySelector("a-scene"));

    console.log("ray-intersection-emitter");
  },
  tick() {
    // set the position of the back item
    if (this.data.updatePositions && this.back && this.front) {
      const frontPosition = this.front.getWorldPosition();
      const backPosition = this.back.getWorldPosition();
      this.el.object3D.position.copy(frontPosition);
      this.el.object3D.lookAt(backPosition);
    }
  }
});
