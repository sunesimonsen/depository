import { html } from "@depository/view";

export default class AdjustStroke12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <g fill="none" stroke="currentColor">
        <circle cx="8.5" cy="7" r="1.5" />
        <circle cx="3.5" cy="5" r="1.5" />
        <path stroke-linecap="round" d="M3.5.5v1m0 7v3m5-11v3m0 7v1" />
      </g>
    </svg> `;
  }
}
