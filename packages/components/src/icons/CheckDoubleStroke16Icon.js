import { html } from "@depository/view";

export default class CheckDoubleStroke16Icon {
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
        stroke-linejoin="round"
        d="M1.5 9L4 11.5 10.5 5M8 11.5L14.5 5"
      />
    </svg> `;
  }
}
