import { html } from "@depository/view";

export default class CreditCardStroke12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <rect
        width="11"
        height="9"
        x=".5"
        y="1.5"
        fill="none"
        stroke="currentColor"
        rx=".5"
        ry=".5"
      />
      <path fill="currentColor" d="M.5 3h11v2H.5z" />
    </svg> `;
  }
}
