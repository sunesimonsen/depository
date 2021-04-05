import { html } from "@depository/view";

export default class IndentDecreaseStroke16Icon {
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
        d="M1.5 1.5h13m-7 4h7m-7 4h7m-13 4h13M4 4.5L1.4 7.1c-.2.2-.2.5 0 .7L4 10.5"
      />
    </svg> `;
  }
}
