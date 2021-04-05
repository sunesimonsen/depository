import { html } from "@depository/view";

export default class Grid3x3Fill12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <g fill="currentColor">
        <rect width="2" height="2" x="2" y="2" rx=".5" ry=".5" />
        <rect width="2" height="2" x="5" y="2" rx=".5" ry=".5" />
        <rect width="2" height="2" x="8" y="2" rx=".5" ry=".5" />
        <rect width="2" height="2" x="8" y="5" rx=".5" ry=".5" />
        <rect width="2" height="2" x="5" y="5" rx=".5" ry=".5" />
        <rect width="2" height="2" x="2" y="5" rx=".5" ry=".5" />
        <rect width="2" height="2" x="2" y="8" rx=".5" ry=".5" />
        <rect width="2" height="2" x="5" y="8" rx=".5" ry=".5" />
        <rect width="2" height="2" x="8" y="8" rx=".5" ry=".5" />
      </g>
    </svg> `;
  }
}
