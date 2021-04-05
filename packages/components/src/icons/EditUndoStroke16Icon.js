import { html } from "@depository/view";

export default class EditUndoStroke16Icon {
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
        d="M15.5 11.2c0-4.3-3.5-7.8-7.8-7.8-2.6.1-5.2 1.5-6.7 3.7M.5 3v4c0 .3.2.5.5.5h4"
      />
    </svg> `;
  }
}
