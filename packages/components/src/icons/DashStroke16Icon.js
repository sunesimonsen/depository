import { html } from "@depository/view";

export default class DashStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <path stroke="currentColor" stroke-linecap="round" d="M3 8.5h10" />
    </svg> `;
  }
}
