import { html } from "@depository/view";

export default class CheckBoxStroke12Icon {
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
        <rect width="11" height="11" x=".5" y=".5" rx=".5" ry=".5" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 6.5l2 2 4-4"
        />
      </g>
    </svg> `;
  }
}
