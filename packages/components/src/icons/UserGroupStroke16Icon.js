import { html } from "@depository/view";

export default class UserGroupStroke16Icon {
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
        <circle cx="11" cy="6" r="2.5" />
        <circle cx="4.5" cy="3.5" r="2" />
        <path
          stroke-linecap="round"
          d="M15.5 14.5c-.2-2.2-2.2-4-4.5-4s-4.3 1.8-4.5 4m1-5c-.4-1.2-1.7-2-3-2s-2.6.8-3 2"
        />
      </g>
    </svg> `;
  }
}
