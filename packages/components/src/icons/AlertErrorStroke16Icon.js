import { html } from "@depository/view";

export default class AlertErrorStroke16Icon {
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
        <circle cx="7.5" cy="8.5" r="7" />
        <path stroke-linecap="round" d="M7.5 4.5V9" />
      </g>
      <circle cx="7.5" cy="12" r="1" fill="currentColor" />
    </svg> `;
  }
}
