import { html } from "@depository/view";

export default class PanelsStroke16Icon {
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
        stroke-linejoin="round"
        d="M14 15.5H2c-.3 0-.5-.2-.5-.5V1c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v14c0 .3-.2.5-.5.5zM7.5.5v15m-6-4h6m0-7h7"
      />
    </svg> `;
  }
}
