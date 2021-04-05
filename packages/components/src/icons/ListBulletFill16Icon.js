import { html } from "@depository/view";

export default class ListBulletFill16Icon {
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
        d="M6 3h8M6 8h8m-8 5h8"
      />
      <g fill="currentColor">
        <circle cx="2.5" cy="3" r="1.5" />
        <circle cx="2.5" cy="8" r="1.5" />
        <circle cx="2.5" cy="13" r="1.5" />
      </g>
    </svg> `;
  }
}
