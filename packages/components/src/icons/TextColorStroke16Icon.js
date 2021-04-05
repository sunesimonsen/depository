import { html } from "@depository/view";

export default class TextColorStroke16Icon {
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
        d="M3.5 11.5l4-10 4 10M5 8.5h5"
      />
      <path fill="currentColor" d="M2 13h11v3H2z" />
    </svg> `;
  }
}
