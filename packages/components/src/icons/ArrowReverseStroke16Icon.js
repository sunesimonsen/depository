import { html } from "@depository/view";

export default class ArrowReverseStroke16Icon {
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
        d="M1 10l9-9M6 15l9-9M4.5.5H10c.3 0 .5.2.5.5v5.5m1 9H6c-.3 0-.5-.2-.5-.5V9.5"
      />
    </svg> `;
  }
}
