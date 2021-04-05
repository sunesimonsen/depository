import { html } from "@depository/view";

export default class DirectionLtrStroke16Icon {
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
        d="M14.5 12.5H.5m12 3l2.6-2.6c.2-.2.2-.5 0-.7l-2.6-2.6m-6 .9V.5H8c.3 0 .5.2.5.5v9.5M6 .5C4.1.5 2.5 2.1 2.5 4S4.1 7.5 6 7.5"
      />
    </svg> `;
  }
}
