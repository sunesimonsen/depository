import { html } from "@depository/view";

export default class ListBulletStroke16Icon {
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
        d="M5.5 2.5h9m-9 5h9m-9 5h9"
      />
      <g fill="currentColor">
        <circle cx="2.5" cy="2.5" r="1.5" />
        <circle cx="2.5" cy="7.5" r="1.5" />
        <circle cx="2.5" cy="12.5" r="1.5" />
      </g>
    </svg> `;
  }
}
