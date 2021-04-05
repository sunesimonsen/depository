import { html } from "@depository/view";

export default class DirectionRtlStroke16Icon {
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
        d="M3.5 15.5L.9 12.9c-.2-.2-.2-.5 0-.7l2.6-2.6m6 .9V.5H11c.3 0 .5.2.5.5v9.5M9 .5C7.1.5 5.5 2.1 5.5 4S7.1 7.5 9 7.5m-7.5 5h14"
      />
    </svg> `;
  }
}
