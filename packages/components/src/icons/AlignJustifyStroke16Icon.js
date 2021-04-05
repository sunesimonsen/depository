import { html } from "@depository/view";

export default class AlignJustifyStroke16Icon {
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
        fill="currentColor"
        d="M1.5 10a.5.5 0 010-1h13a.5.5 0 110 1h-13zm0-8a.5.5 0 010-1h13a.5.5 0 110 1h-13zm0 4a.5.5 0 010-1h13a.5.5 0 110 1h-13zm0 8a.5.5 0 110-1h13a.5.5 0 110 1h-13z"
      />
    </svg> `;
  }
}
