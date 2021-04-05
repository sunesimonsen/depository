import { html } from "@depository/view";

export default class AlignRightStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        d="M1.5 1.5h13m-9 4h9m-13 4h13m-9 4h9"
      />
    </svg> `;
  }
}
