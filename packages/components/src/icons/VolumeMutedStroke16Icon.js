import { html } from "@depository/view";

export default class VolumeMutedStroke16Icon {
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
        d="M4.5 10.5l4.1 4.1c.4.4.9.1.9-.3V1.7c0-.4-.5-.7-.9-.3L4.5 5.5H1c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h3.5zm7-.5l4-4m-4 0l4 4"
      />
    </svg> `;
  }
}
