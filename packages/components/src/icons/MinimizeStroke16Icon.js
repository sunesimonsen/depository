import { html } from "@depository/view";

export default class MinimizeStroke16Icon {
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
        d="M.5 4.5H4c.3 0 .5-.2.5-.5V.5m-4 11H4c.3 0 .5.2.5.5v3.5m11-11H12c-.3 0-.5-.2-.5-.5V.5m4 11H12c-.3 0-.5.2-.5.5v3.5M.5.5L4 4M15.5.5L12 4M.5 15.5L4 12m11.5 3.5L12 12"
      />
    </svg> `;
  }
}
