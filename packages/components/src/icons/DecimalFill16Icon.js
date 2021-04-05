import { html } from "@depository/view";

export default class DecimalFill16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <ellipse
        cx="9.5"
        cy="8"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        rx="5.5"
        ry="7"
      />
      <circle cx="1.5" cy="14.5" r="1.5" fill="currentColor" />
    </svg> `;
  }
}
