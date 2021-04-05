import { html } from "@depository/view";

export default class InfoStroke12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <g stroke="currentColor">
        <circle cx="5.5" cy="6.5" r="5" fill="none" />
        <path stroke-linecap="round" d="M5.5 9.5v-3" />
      </g>
      <circle cx="5.5" cy="4" r="1" fill="currentColor" />
    </svg> `;
  }
}
