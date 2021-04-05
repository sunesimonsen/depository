import { html } from "@depository/view";

export default class HeadingStroke16Icon {
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
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        d="M2.5 1.5v14m10-14v14m-10-7h10"
      />
    </svg> `;
  }
}
