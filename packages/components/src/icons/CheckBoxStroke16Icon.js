import { html } from "@depository/view";

export default class CheckBoxStroke16Icon {
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
        <rect width="13" height="13" x="1.5" y="1.5" rx=".5" ry=".5" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 8.5L7 11l5-5"
        />
      </g>
    </svg> `;
  }
}
