import { html } from "@depository/view";

export default class ArrowReverseFill16Icon {
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
        stroke-width="1.25"
        d="M1 10l7.5-7.5m-1 11L15 6"
      />
      <path
        fill="currentColor"
        d="M11 5.79V.5c0-.28-.22-.5-.5-.5H5.21a.5.5 0 00-.36.85l5.29 5.29c.32.32.86.1.86-.35zm-6 4.42v5.29c0 .28.22.5.5.5h5.29c.45 0 .67-.54.35-.85l-5.29-5.3a.5.5 0 00-.85.36z"
      />
    </svg> `;
  }
}
