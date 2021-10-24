import { html } from "@depository/view";
import { IconButton, Center, ColumnLayout } from "@depository/components";
import LightbulbStroke12Icon from "@depository/components/icons/LightbulbStroke12Icon";

import { css } from "stylewars";

const iconStyles = css`
  & {
    font-size: 64px;
  }
`;

class DaylightIcon {
  data() {
    return { isDay: "examples.toggleButton.day" };
  }

  render({ isDay }) {
    const icon = isDay ? "🌔" : "🌘";
    return html`<span className=${iconStyles}>${icon}</span>`;
  }
}

export default class Example {
  constructor() {
    this.toggleDay = (e) => {
      this.dispatch({
        inputs: { isDay: "examples.toggleButton.day" },
        payload: ({ isDay }) => ({ "examples.toggleButton.day": !isDay }),
      });
    };
  }

  data() {
    return { isDay: "examples.toggleButton.day" };
  }

  render({ isDay }) {
    return html`
      <${Center}>
        <${ColumnLayout} columns="2">
          <${IconButton}
            pill
            aria-pressed=${String(isDay)}
            onClick=${this.toggleDay}
          >
            <${LightbulbStroke12Icon} />
          <//>
          <${DaylightIcon} />
        <//>
      <//>
    `;
  }
}
