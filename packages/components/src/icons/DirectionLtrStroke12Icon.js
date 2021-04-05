import { html } from "@depository/view";

export default class DirectionLtrStroke12Icon {
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
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        d="M6.5 7.5V1c0-.3-.2-.5-.5-.5H4.5v7m5 4l1.6-1.6c.2-.2.2-.5 0-.7L9.5 7.5M4 .5c-1.1 0-2 .9-2 2s.9 2 2 2m6.5 5H.5"
      />
    </svg> `;
  }
}
