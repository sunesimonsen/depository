import { html } from "@depository/view";

export default class Paperclip16Icon {
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
        d="M9.5 4v7.7c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V3C6.5 1.6 7.6.5 9 .5s2.5 1.1 2.5 2.5v9c0 1.9-1.6 3.5-3.5 3.5S4.5 13.9 4.5 12V4"
      />
    </svg> `;
  }
}
