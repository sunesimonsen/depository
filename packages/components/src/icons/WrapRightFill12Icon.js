import { html } from "@depository/view";

export default class WrapRightFill12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <path
        fill="currentColor"
        d="M10 11a1 1 0 000-2H2a1 1 0 100 2h8zm0-8H7a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1zM4 8a1 1 0 100-2H2a1 1 0 100 2h2zM2 3a1 1 0 100 2h2a1 1 0 100-2H2zm0-3a1 1 0 100 2h8a1 1 0 000-2H2z"
      />
    </svg> `;
  }
}
