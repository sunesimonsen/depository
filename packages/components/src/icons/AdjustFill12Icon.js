import { html } from "@depository/view";

export default class AdjustFill12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        d="M3.5.5v1m0 7v3m5-11v3m0 7v1"
      />
      <g fill="currentColor">
        <circle cx="8.5" cy="7" r="2" />
        <circle cx="3.5" cy="5" r="2" />
      </g>
    </svg> `;
  }
}
