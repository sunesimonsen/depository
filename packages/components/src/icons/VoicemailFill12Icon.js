import { html } from "@depository/view";

export default class VoicemailFill12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <g fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="2.8" cy="5.2" r="1.8" />
        <circle cx="9.2" cy="5.2" r="1.8" />
        <path d="M2.5 7h7" />
      </g>
    </svg> `;
  }
}
