import { html } from "@depository/view";

export default class GlobeStroke16Icon {
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
        <circle cx="8" cy="8" r="7.5" />
        <path d="M1.5 4.5h13m-13 7h13" />
        <ellipse cx="8" cy="8" rx="2.5" ry="7.5" />
      </g>
    </svg> `;
  }
}
