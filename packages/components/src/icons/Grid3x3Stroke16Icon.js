import { html } from "@depository/view";

export default class Grid3x3Stroke16Icon {
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
        stroke-linejoin="round"
        d="M.5.5h15v15H.5zm5 0v15m5-15v15m-10-10h15m-15 5h15"
      />
    </svg> `;
  }
}
