import { html } from "@depository/view";

export default class MultilineStroke16Icon {
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
        d="M1.5 6.5h13m-13-4h13m-13 8h13m-13 4h6"
      />
    </svg> `;
  }
}
