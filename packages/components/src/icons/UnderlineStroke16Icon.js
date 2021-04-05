import { html } from "@depository/view";

export default class UnderlineStroke16Icon {
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
        d="M2.5 15.5h10m-9-14v8c0 2.2 1.8 4 4 4s4-1.8 4-4v-8"
      />
    </svg> `;
  }
}
