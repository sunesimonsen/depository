import { html } from "@depository/view";

export default class ItalicStroke16Icon {
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
        d="M7.5 1.5h3M9 1.5l-3 14m-1.5 0h3"
      />
    </svg> `;
  }
}
