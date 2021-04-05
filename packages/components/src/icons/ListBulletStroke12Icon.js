import { html } from "@depository/view";

export default class ListBulletStroke12Icon {
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
        d="M5 2.5h5.5M5 6.5h5.5m-5.5 4h5.5"
      />
      <g fill="currentColor">
        <circle cx="2" cy="2.5" r="1" />
        <circle cx="2" cy="6.5" r="1" />
        <circle cx="2" cy="10.5" r="1" />
      </g>
    </svg> `;
  }
}
