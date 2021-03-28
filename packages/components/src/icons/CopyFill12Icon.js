import { html } from "@depository/view";

export default class CopyFill12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <g fill="currentColor">
        <path
          d="M4 3h3.5a.5.5 0 00.5-.5V1a1 1 0 00-1-1H1a1 1 0 00-1 1v6a1 1 0 001 1h1.5a.5.5 0 00.5-.5V4a1 1 0 011-1z"
        />
        <rect width="8" height="8" x="4" y="4" rx="1" ry="1" />
      </g>
    </svg> `;
  }
}
