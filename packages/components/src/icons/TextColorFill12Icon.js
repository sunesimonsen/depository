import { html } from "@depository/view";

export default class TextColorFill12Icon {
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
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 8l3-7 3 7M4 6h4"
      />
      <path fill="currentColor" d="M2 10h8v2H2z" />
    </svg> `;
  }
}
