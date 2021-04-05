import { html } from "@depository/view";

export default class UserSoloStroke16Icon {
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
        <circle cx="8" cy="5" r="3.5" />
        <path
          stroke-linecap="round"
          d="M2.5 15.5c.3-2.8 2.6-5 5.5-5s5.2 2.2 5.5 5"
        />
      </g>
    </svg> `;
  }
}
