import { html } from "@depository/view";

export default class BarChartStroke16Icon {
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
        d="M8 6v8m-6-4v4M14 2v12"
      />
    </svg> `;
  }
}
