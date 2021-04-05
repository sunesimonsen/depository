import { html } from "@depository/view";

export default class Grid2x2Fill16Icon {
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
        <rect width="7" height="7" rx="1" ry="1" />
        <rect width="7" height="7" y="9" rx="1" ry="1" />
        <rect width="7" height="7" x="9" rx="1" ry="1" />
        <rect width="7" height="7" x="9" y="9" rx="1" ry="1" />
      </g>
    </svg> `;
  }
}
