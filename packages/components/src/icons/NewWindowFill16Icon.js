import { html } from "@depository/view";

export default class NewWindowFill16Icon {
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
        stroke-width="1.25"
        d="M14.5 10.5V14c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V2c0-.28.22-.5.5-.5h3.5M8 8l4-4"
      />
      <path
        fill="currentColor"
        d="M15 7.29V2c0-.55-.45-1-1-1H8.71a.5.5 0 00-.36.85l5.79 5.79c.32.32.86.1.86-.35z"
      />
    </svg> `;
  }
}
