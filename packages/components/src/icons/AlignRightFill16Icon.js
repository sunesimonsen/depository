import { html } from "@depository/view";

export default class AlignRightFill16Icon {
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
        stroke-width="2"
        d="M2 2h12M5.5 6H14M2 10h12m-8.5 4H14"
      />
    </svg> `;
  }
}
