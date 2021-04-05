import { html } from "@depository/view";

export default class MarkupStroke12Icon {
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
        d="M3.5 4L1.9 5.6c-.2.2-.2.5 0 .7L3.5 8m5-4l1.6 1.6c.2.2.2.5 0 .7L8.5 8M7 2.5l-2 7"
      />
    </svg> `;
  }
}
