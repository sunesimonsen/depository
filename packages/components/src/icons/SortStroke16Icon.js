import { html } from "@depository/view";

export default class SortStroke16Icon {
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
        d="M3 6.5l4.6-4.6a.48.48 0 01.7 0L13 6.5m-10 3l4.6 4.6a.48.48 0 00.7 0l4.6-4.6"
      />
    </svg> `;
  }
}
