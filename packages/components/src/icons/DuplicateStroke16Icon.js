import { html } from "@depository/view";

export default class DuplicateStroke16Icon {
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
        d="M1.5 9.5H1C.7 9.5.5 9.3.5 9V1C.5.7.7.5 1 .5h11c.3 0 .5.2.5.5v3.5m-9-1h6m-3 6h6m-6 3h6M4 6.5h11c.3 0 .5.2.5.5v8c0 .3-.2.5-.5.5H4c-.3 0-.5-.2-.5-.5V7c0-.3.2-.5.5-.5z"
      />
    </svg> `;
  }
}
