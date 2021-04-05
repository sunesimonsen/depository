import { html } from "@depository/view";

export default class MultilineFill16Icon {
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
        stroke-width="2"
        d="M2 6h12M2 2h12M2 10h12M2 14h6"
      />
    </svg> `;
  }
}
