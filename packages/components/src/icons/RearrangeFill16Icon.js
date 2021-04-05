import { html } from "@depository/view";

export default class RearrangeFill16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <g fill="currentColor">
        <rect width="13" height="4" rx="1" ry="1" />
        <rect width="13" height="4" y="12" rx="1" ry="1" />
        <rect width="13" height="4" x="3" y="6" rx="1" ry="1" />
      </g>
    </svg> `;
  }
}
