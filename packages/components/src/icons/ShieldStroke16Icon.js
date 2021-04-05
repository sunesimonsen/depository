import { html } from "@depository/view";

export default class ShieldStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        d="M8 15.5S14.5 13 14.5 5V3L8 .5 1.5 3v2C1.5 13 8 15.5 8 15.5z"
      />
    </svg> `;
  }
}
