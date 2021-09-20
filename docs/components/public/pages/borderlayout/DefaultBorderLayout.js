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
        <div className=${areaStyles("top", "#5eae91")}>Top</div>
        <div className=${areaStyles("start", "#ffb057")}>Start</div>
        <div className=${areaStyles("main", "#daeded")}>Main</div>
        <div className=${areaStyles("end", "#ffb057")}>End</div>
        <div className=${areaStyles("bottom", "#5eae91")}>Bottom</div>
      <//>
    `;
  }
}
