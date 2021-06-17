import { html } from "@depository/view";

export class DirectionSwitch {
  constructor() {
    this.toggle = (e) => {
      sessionStorage.setItem("direction", e.target.checked ? "rtl" : "ltr");
      window.location.reload();
    };
  }

  data() {
    return { dir: "global.direction" };
  }

  render({ dir }) {
    return html`
      <input
        name="direction-switch"
        type="checkbox"
        @change=${this.toggle}
        .checked=${dir === "rtl"}
      />
      <label for="direction-switch">RTL</label>
    `;
  }
}
