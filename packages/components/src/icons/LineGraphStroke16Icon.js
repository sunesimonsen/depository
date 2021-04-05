import { html } from "@depository/view";

export default class LineGraphStroke16Icon {
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
        <rect width="15" height="13" x=".5" y="1.5" rx=".5" ry=".5" />
        <path stroke-linejoin="round" d="M.5 12.5l3-4.5 2 3 4-6 3 4.5 3-4.5" />
      </g>
    </svg> `;
  }
}
