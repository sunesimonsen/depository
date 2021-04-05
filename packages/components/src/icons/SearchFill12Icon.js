import { html } from "@depository/view";

export default class SearchFill12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <circle
        cx="4.5"
        cy="4.5"
        r="3.5"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="M11 11L7.5 7.5"
      />
    </svg> `;
  }
}
