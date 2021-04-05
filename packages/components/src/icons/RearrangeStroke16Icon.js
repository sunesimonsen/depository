import { html } from "@depository/view";

export default class RearrangeStroke16Icon {
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
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="M1 2h11M1 14h11M4 8h11"
      />
    </svg> `;
  }
}
