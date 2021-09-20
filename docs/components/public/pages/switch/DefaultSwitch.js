import { html } from "@depository/view";
import { Switch, Center, ColumnLayout } from "@depository/components";
import { css } from "stylewars";

const iconStyles = css`
  & {
    font-size: 64px;
  }
`;

class DaylightIcon {
  data() {
    return {
      isDay: "examples.switch.day",
    };
  }

  render({ isDay }) {
    const icon = isDay ? "🌔" : "🌘";
    return html`<span class=${iconStyles}>${icon}</span>`;
  }
}

export default class Example {
  constructor() {
    this.toggleDay = (e) => {
      this.dispatch({
        payload: { "examples.switch.day": e.target.checked },
      });
    };
  }

  data() {
    return {
      isDay: "examples.switch.day",
    };
  }

  render({ isDay }) {
    return html`
      <${Center}>
        <${ColumnLayout} columns="2">
          <${Switch} id="switch" .checked=${isDay} onChange=${this.toggleDay} />
          <${DaylightIcon} />
        <//>
      <//>
    `;
  }
}
