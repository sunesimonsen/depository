import { html } from "@depository/view";

export default class MarkupStroke16Icon {
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
        d="M12 5.5l2.1 2.1c.2.2.2.5 0 .7L12 10.5m-8-5L1.9 7.6c-.2.2-.2.5 0 .7L4 10.5M10 3L6 13"
      />
    </svg> `;
  }
}
