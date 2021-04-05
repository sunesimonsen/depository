import { html } from "@depository/view";

export default class PlusStroke12Icon {
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
        stroke="currentColor"
        stroke-linecap="round"
        d="M5.5 2.5v8m4-4h-8"
      />
    </svg> `;
  }
}
