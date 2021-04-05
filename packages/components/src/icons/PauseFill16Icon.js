import { html } from "@depository/view";

export default class PauseFill16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <g fill="currentColor">
        <rect width="4" height="14" x="3" y="1" rx="1" ry="1" />
        <rect width="4" height="14" x="9" y="1" rx="1" ry="1" />
      </g>
    </svg> `;
  }
}
