import { html } from "@depository/view";

export default class ClockStroke16Icon {
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
        <circle cx="8" cy="8" r="7.5" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M7.5 3v5.5H11"
        />
      </g>
    </svg> `;
  }
}
