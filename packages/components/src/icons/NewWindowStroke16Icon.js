import { html } from "@depository/view";

export default class NewWindowStroke16Icon {
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
        stroke-linejoin="round"
        d="M14.5 10.5V14c0 .3-.2.5-.5.5H2c-.3 0-.5-.2-.5-.5V2c0-.3.2-.5.5-.5h3.5"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        d="M8 8l6.5-6.5"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.5 1.5h6v6"
      />
    </svg> `;
  }
}
