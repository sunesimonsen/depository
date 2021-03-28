import { html } from "@depository/view";

export default class EditRedoStroke16Icon {
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
        d="M.5 11.2C.5 7 4 3.5 8.2 3.5c2.7 0 5.2 1.4 6.8 3.6m.5-4.1v4c0 .3-.2.5-.5.5h-4"
      />
    </svg> `;
  }
}
