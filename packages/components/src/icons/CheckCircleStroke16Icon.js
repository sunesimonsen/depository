import { html } from "@depository/view";

export default class CheckCircleStroke16Icon {
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
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 9l2.5 2.5 5-5"
        />
        <circle cx="7.5" cy="8.5" r="7" />
      </g>
    </svg> `;
  }
}
