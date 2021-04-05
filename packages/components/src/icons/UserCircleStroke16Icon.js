import { html } from "@depository/view";

export default class UserCircleStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <g fill="none" stroke="currentColor">
        <circle cx="8" cy="8" r="7.5" />
        <circle cx="8" cy="5.5" r="2" />
        <path
          stroke-linecap="round"
          d="M11.5 12c-.6-1.5-1.8-2.5-3.5-2.5s-2.9 1-3.5 2.5"
        />
      </g>
    </svg> `;
  }
}
