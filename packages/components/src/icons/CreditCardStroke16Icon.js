import { html } from "@depository/view";

export default class CreditCardStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <rect
        width="15"
        height="11"
        x=".5"
        y="2.5"
        fill="none"
        stroke="currentColor"
        rx=".5"
        ry=".5"
      />
      <path fill="currentColor" d="M.5 5h15v2H.5z" />
    </svg> `;
  }
}
