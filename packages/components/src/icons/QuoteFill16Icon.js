import { html } from "@depository/view";

export default class QuoteFill16Icon {
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
        fill="currentColor"
        d="M7 8H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1zm6 0h-3c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1z"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="M5.5 12C6.5 11 7 9.5 7 8V6m4.5 6c1-1 1.5-2.5 1.5-4V6"
      />
    </svg> `;
  }
}
