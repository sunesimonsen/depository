import { html } from "@depository/view";

export default class HeartStroke12Icon {
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
        stroke-linejoin="round"
        d="M8.5 1c-1.1 0-2 .6-2.5 1.5C5.5 1.6 4.6 1 3.5 1c-1.6 0-3 1-3 3C.5 6.5 6 11.5 6 11.5s5.5-5 5.5-7.5c0-2-1.4-3-3-3z"
      />
    </svg> `;
  }
}
