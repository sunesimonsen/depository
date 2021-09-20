import { html } from "@depository/view";
import { Switch, ColumnLayout } from "@depository/components";

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
      <${ColumnLayout} columns="2" gap="10">
        <${Switch}
          id="direction-switch"
          onChange=${this.toggle}
          .checked=${dir === "rtl"}
        />
        <label for="direction-switch">RTL</label>
      <//>
    `;
  }
}
