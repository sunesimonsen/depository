import { html } from "@depository/view";

export default class AlignCenterFill12Icon {
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
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="M2 1h8M4 4h4M2 7h8m-6 3h4"
      />
    </svg> `;
  }
}
