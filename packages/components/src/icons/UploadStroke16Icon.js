import { html } from "@depository/view";

export default class UploadStroke16Icon {
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
        d="M8.5 14.5V9m2.5 5.5c2.49 0 4.5-2.01 4.5-4.5S13.49 5.5 11 5.5c-.21 0-.42.03-.62.06-.43-1.75-2-3.06-3.88-3.06-2.21 0-4 1.79-4 4 0 .44.09.85.22 1.25A3.49 3.49 0 00.5 11c0 1.93 1.57 3.5 3.5 3.5h2M6 11l2.15-2.15c.2-.2.51-.2.71 0L11 11"
      />
    </svg> `;
  }
}
