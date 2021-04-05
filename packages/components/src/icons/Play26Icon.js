import { html } from "@depository/view";

export default class Play26Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      focusable="false"
      viewBox="0 0 26 26"
      ...${props}
    >
      <circle
        cx="13"
        cy="13"
        r="11"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      />
      <path fill="currentColor" d="M17 13l-6 4V9" />
    </svg> `;
  }
}
