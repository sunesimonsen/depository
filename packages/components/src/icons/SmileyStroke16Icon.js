import { html } from "@depository/view";

export default class SmileyStroke16Icon {
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
        <path stroke-linecap="round" d="M4 9c.4 1.7 2.1 3 4 3s3.6-1.3 4-3" />
      </g>
      <g fill="currentColor">
        <circle cx="6" cy="6" r="1" />
        <circle cx="10" cy="6" r="1" />
      </g>
    </svg> `;
  }
}
