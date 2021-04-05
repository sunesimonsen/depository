import { html } from "@depository/view";

export default class AdjustStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <g fill="none" stroke="currentColor">
        <circle cx="4.5" cy="6.5" r="2" />
        <circle cx="11.5" cy="9.5" r="2" />
        <path stroke-linecap="round" d="M4.5.5v2m0 8v5m7-15v5m0 8v2" />
      </g>
    </svg> `;
  }
}
