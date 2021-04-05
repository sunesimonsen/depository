import { html } from "@depository/view";

export default class OverflowStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <g fill="currentColor">
        <circle cx="2.5" cy="8" r="1.5" />
        <circle cx="8" cy="8" r="1.5" />
        <circle cx="13.5" cy="8" r="1.5" />
      </g>
    </svg> `;
  }
}
