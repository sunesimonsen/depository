import { html } from "@depository/view";

export default class CircleStroke12Icon {
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
        d="M1.41 2.97c.41-.62.94-1.15 1.56-1.56M.61 7.11C.54 6.75.5 6.38.5 6c0-.38.04-.74.11-1.1m2.35 5.69c-.61-.41-1.14-.94-1.55-1.55m5.7 2.35c-.36.07-.73.11-1.11.11a5.7 5.7 0 01-1.1-.11m5.69-2.36c-.41.62-.94 1.15-1.56 1.56m2.36-5.69c.07.36.11.72.11 1.1 0 .38-.04.74-.11 1.1M9.03 1.41c.62.41 1.15.94 1.56 1.56M4.9.61C5.26.54 5.62.5 6 .5s.74.04 1.1.11"
      />
    </svg> `;
  }
}
