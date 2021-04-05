import { html } from "@depository/view";

export default class ItalicFill16Icon {
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
        stroke-width="2"
        d="M8 1h3M9.5 1l-3 14M5 15h3"
      />
    </svg> `;
  }
}
