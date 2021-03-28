import { html } from "@depository/view";

export default class SearchStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <circle cx="6" cy="6" r="5.5" fill="none" stroke="currentColor" />
      <path stroke="currentColor" stroke-linecap="round" d="M15 15l-5-5" />
    </svg> `;
  }
}
