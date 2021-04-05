import { html } from "@depository/view";

export default class Ellipsis26Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      focusable="false"
      viewBox="0 0 26 26"
      ...${props}
    >
      <g fill="currentColor">
        <circle cx="7" cy="13" r="2" />
        <circle cx="13" cy="13" r="2" />
        <circle cx="19" cy="13" r="2" />
      </g>
    </svg> `;
  }
}
