import { html } from "@depository/view";

export default class EditUndoStroke12Icon {
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
        d="M11.5 8.2c0-3.2-2.6-5.8-5.8-5.8C3 2.5 2.1 3.8 1 5m2.5.5H1C.7 5.5.5 5.3.5 5V2.5"
      />
    </svg> `;
  }
}
