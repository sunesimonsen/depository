import { html } from "@depository/view";

export default class Grip16Icon {
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
        <rect width="2" height="2" x="5" y="1" rx=".5" ry=".5" />
        <rect width="2" height="2" x="9" y="1" rx=".5" ry=".5" />
        <rect width="2" height="2" x="5" y="5" rx=".5" ry=".5" />
        <rect width="2" height="2" x="9" y="5" rx=".5" ry=".5" />
        <rect width="2" height="2" x="5" y="9" rx=".5" ry=".5" />
        <rect width="2" height="2" x="9" y="9" rx=".5" ry=".5" />
        <rect width="2" height="2" x="5" y="13" rx=".5" ry=".5" />
        <rect width="2" height="2" x="9" y="13" rx=".5" ry=".5" />
      </g>
    </svg> `;
  }
}
