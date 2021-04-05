import { html } from "@depository/view";

export default class FilePdfStroke12Icon {
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
        d="M10.5 3.21V11a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V1A.5.5 0 012 .5h5.79a.5.5 0 01.35.15l2.21 2.21a.5.5 0 01.15.35zM7.5.5V3a.5.5 0 00.5.5h2.5m-7 6h5"
      />
      <rect
        width="6"
        height="3"
        x="3"
        y="5"
        fill="currentColor"
        rx=".5"
        ry=".5"
      />
    </svg> `;
  }
}
