import { html } from "@depository/view";

export default class LineGraphStroke12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <g fill="none" stroke="currentColor">
        <rect width="11" height="9" x=".5" y="1.5" rx=".5" ry=".5" />
        <path
          stroke-linejoin="round"
          d="M.5 9.3L2.7 6l1.47 2.2L7.1 3.8l2.2 3.3 2.2-3.3"
        />
      </g>
    </svg> `;
  }
}
