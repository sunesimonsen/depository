import { html } from "@depository/view";

export default class IndentDecreaseStroke12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        d="M3.5 3.5L1.4 5.6c-.2.2-.2.5 0 .7l2.1 2.1m-2-6.9h9m-5 3h5m-5 3h5m-9 3h9"
      />
    </svg> `;
  }
}
