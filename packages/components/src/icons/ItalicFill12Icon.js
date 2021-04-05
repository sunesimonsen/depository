import { html } from "@depository/view";

export default class ItalicFill12Icon {
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
        stroke-width="2"
        d="M5.5 1h3M7 1L5 11m-1.5 0h3"
      />
    </svg> `;
  }
}
