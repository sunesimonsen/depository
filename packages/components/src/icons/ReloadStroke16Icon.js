import { html } from "@depository/view";

export default class ReloadStroke16Icon {
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
        d="M13.1 12c-1.2 1.5-3 2.5-5.1 2.5-3.6 0-6.5-2.9-6.5-6.5S4.4 1.5 8 1.5c2.2 0 4.1 1.1 5.3 2.7m.2-3.7V4c0 .3-.2.5-.5.5H9.5"
      />
    </svg> `;
  }
}
