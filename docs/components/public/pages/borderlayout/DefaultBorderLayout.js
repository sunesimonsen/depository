import { html } from "@depository/view";
import { css } from "stylewars";
import { BorderLayout } from "@depository/components";

const areaStyles = (area, color) => css`
  & {
    grid-area: ${area};
    padding: 10px 20px;
    background-color: ${color};
    text-align: center;
  }
`;

export default class Example {
  render() {
    return html`
      <${BorderLayout}>
        <div class=${areaStyles("top", "#5eae91")}>Top</div>
        <div class=${areaStyles("start", "#ffb057")}>Start</div>
        <div class=${areaStyles("main", "#daeded")}>Main</div>
        <div class=${areaStyles("end", "#ffb057")}>End</div>
        <div class=${areaStyles("bottom", "#5eae91")}>Bottom</div>
      <//>
    `;
  }
}
