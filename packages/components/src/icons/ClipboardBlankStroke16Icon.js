import { html } from "@depository/view";

export default class ClipboardBlankStroke16Icon {
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
        d="M4.5 2.5H2a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5h-2.5m-6.95 2C4.25 2.42 5.883.5 8 .5s3.75 1.92 3.45 4h-6.9z"
      />
    </svg> `;
  }
}
