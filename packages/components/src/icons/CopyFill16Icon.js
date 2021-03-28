import { html } from "@depository/view";

export default class CopyFill16Icon {
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
        <path
          d="M4 5a1 1 0 011-1h5.5a.5.5 0 00.5-.5V1a1 1 0 00-1-1H1a1 1 0 00-1 1v9a1 1 0 001 1h2.5a.5.5 0 00.5-.5z"
        />
        <rect width="11" height="11" x="5" y="5" rx="1" ry="1" />
      </g>
    </svg> `;
  }
}
