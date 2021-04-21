import { css } from "stylewars";

const popupStyles = css`
  & {
    position: absolute;
    will-change: transform;
    left: 0;
    top: 0;
    box-sizing: border-box;
    visibility: hidden;
  }
`;

const visibleStyles = css`
  & {
    visibility: visible;
  }
`;

const placements = {
  bottom: (anchor, popup, margins) => ({
    _top: anchor._top + margins.bottom + anchor._height,
    _left: anchor._left + anchor._width / 2 - popup._width / 2,
    _height: popup._height,
    _width: popup._width,
  }),
  "bottom-start": (anchor, popup, margins) => ({
    _top: anchor._top + margins.bottom + anchor._height,
    _left: anchor._left,
    _height: popup._height,
    _width: popup._width,
  }),
  "bottom-end": (anchor, popup, margins) => ({
    _top: anchor._top + margins.bottom + anchor._height,
    _left: anchor._left + anchor._width - popup._width,
    _height: popup._height,
    _width: popup._width,
  }),
  "bottom-stretch": (anchor, popup, margins) => ({
    _top: anchor._top + margins.bottom + anchor._height,
    _left: anchor._left,
    _height: popup._height,
    _width: anchor._width,
  }),
  start: (anchor, popup, margins) => ({
    _top: anchor._top + anchor._height / 2 - popup._height / 2,
    _left: anchor._left - margins.start - popup._width,
    _height: popup._height,
    _width: popup._width,
  }),
  "start-top": (anchor, popup, margins) => ({
    _top: anchor._top,
    _left: anchor._left - margins.start - popup._width,
    _height: popup._height,
    _width: popup._width,
  }),
  "start-bottom": (anchor, popup, margins) => ({
    _top: anchor._top + anchor._height - popup._height,
    _left: anchor._left - margins.start - popup._width,
    _height: popup._height,
    _width: popup._width,
  }),
  end: (anchor, popup, margins) => ({
    _top: anchor._top + anchor._height / 2 - popup._height / 2,
    _left: anchor._left + margins.end + anchor._width,
    _height: popup._height,
    _width: popup._width,
  }),
  "end-top": (anchor, popup, margins) => ({
    _top: anchor._top,
    _left: anchor._left + margins.end + anchor._width,
    _height: popup._height,
    _width: popup._width,
  }),
  "end-bottom": (anchor, popup, margins) => ({
    _top: anchor._top + anchor._height - popup._height,
    _left: anchor._left + margins.end + anchor._width,
    _height: popup._height,
    _width: popup._width,
  }),
  top: (anchor, popup, margins) => ({
    _top: anchor._top - margins.top - popup._height,
    _left: anchor._left + anchor._width / 2 - popup._width / 2,
    _height: popup._height,
    _width: popup._width,
  }),
  "top-start": (anchor, popup, margins) => ({
    _top: anchor._top - margins.top - popup._height,
    _left: anchor._left,
    _height: popup._height,
    _width: popup._width,
  }),
  "top-end": (anchor, popup, margins) => ({
    _top: anchor._top - margins.top - popup._height,
    _left: anchor._left + anchor._width - popup._width,
    _height: popup._height,
    _width: popup._width,
  }),
  "top-stretch": (anchor, popup, margins) => ({
    _top: anchor._top - margins.top - popup._height,
    _left: anchor._left,
    _height: popup._height,
    _width: anchor._width,
  }),
};

const positionRelative = (placement, anchor, popup, margins) =>
  placements[placement](anchor, popup, margins);

const getComputedStyle = (element, property) =>
  window.getComputedStyle(element).getPropertyValue(property);

const detectDir = (element) => getComputedStyle(element, "direction");

const isOutsideContainer = (placement, position, container) => {
  const side = placement.match(/^(start|end|top|bottom)/)[0];

  const top = position._top - container.scrollTop;
  const left = position._left - container.scrollLeft;

  switch (side) {
    case "top":
      return top < 0;
    case "start":
      return left < 0;
    case "end":
      return left + position._width > container.offsetWidth;
    case "bottom":
      return top + position._height > container.offsetHeight;
  }
};

const flip = {
  start: "end",
  end: "start",
  top: "bottom",
  bottom: "top",
};

export class Popup {
  constructor(anchor, popup, options = {}) {
    this._anchor = anchor;
    this._popup = popup;

    this._popup.classList.add(popupStyles);

    this._placement = options.placement || "bottom";

    let margins = options.margins;

    if (typeof margins === "number") {
      margins = { top: margins, start: margins, end: margins, bottom: margins };
    }

    this._margins = { top: 0, start: 0, end: 0, bottom: 0, ...margins };

    if (detectDir(anchor) === "rtl") {
      this._placement = this._placement.replace(
        /(start|end)/,
        ($0) => flip[$0]
      );
      const start = this._margins.start;
      this._margins.start = this._margins.end;
      this._margins.end = start;
    }

    this._update = this._update.bind(this);

    this._overflow = options.overflow || "none";
  }

  _update() {
    const anchorRect = {
      _top: this._anchor.offsetTop,
      _left: this._anchor.offsetLeft,
      _height: this._anchor.offsetHeight,
      _width: this._anchor.offsetWidth,
    };
    const popupRect = {
      _height: this._popup.offsetHeight,
      _width: this._popup.offsetWidth,
    };

    let position = positionRelative(
      this._placement,
      anchorRect,
      popupRect,
      this._margins
    );

    if (
      this._overflow === "flip" &&
      isOutsideContainer(this._placement, position, this._container)
    ) {
      const flippedPlacement = this._placement.replace(
        /^(start|end|top|bottom)/,
        ($0) => flip[$0]
      );

      const flippedPosition = positionRelative(
        flippedPlacement,
        anchorRect,
        popupRect,
        this._margins
      );

      if (
        !isOutsideContainer(flippedPlacement, flippedPosition, this._container)
      ) {
        this._placement = flippedPlacement;
        position = flippedPosition;
      }
    }

    this._popup.style.left = position._left + "px";
    this._popup.style.top = position._top + "px";
    this._popup.setAttribute(
      "data-placement",
      this._placement.replace("start", "left").replace("end", "right")
    );
  }

  show() {
    window.addEventListener("resize", this._update);
    window.addEventListener("scroll", this._update, true);

    this._popup.classList.add(visibleStyles);

    if (this._placement.includes("stretch")) {
      const anchorRect = this._anchor.getBoundingClientRect();
      this._popup.style.width = `${anchorRect.width}px`;
    }

    this._container = this._anchor.offsetParent;

    this._update();
  }

  hide() {
    window.removeEventListener("resize", this._update);
    window.removeEventListener("scroll", this._update, true);
    this._popup.classList.remove(visibleStyles);
  }
}
