import { html } from "@depository/view";

export default class DecimalStroke16Icon {
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
        cx="8.8"
        cy="8.5"
        fill="none"
        stroke="currentColor"
        rx="5.2"
        ry="7"
      />
      <circle cx="2" cy="15" r="1" fill="currentColor" />
    </svg> `;
  }
}
