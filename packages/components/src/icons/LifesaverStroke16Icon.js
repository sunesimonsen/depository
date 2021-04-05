import { html } from "@depository/view";

export default class LifesaverStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <g fill="none" stroke="currentColor">
        <circle cx="8" cy="8" r="7.5" />
        <circle cx="8" cy="8" r="3.5" />
        <path d="M10.5 10.5l3 3m-11-11l3 3m0 5l-3 3m11-11l-3 3" />
      </g>
    </svg> `;
  }
}
