import { html } from "@depository/view";

export default class VoicemailStroke16Icon {
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
        <circle cx="3.5" cy="7.5" r="3" />
        <circle cx="12.5" cy="7.5" r="3" />
        <path d="M3.5 10.5h9" />
      </g>
    </svg> `;
  }
}
