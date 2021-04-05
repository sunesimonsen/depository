import { html } from "@depository/view";

export default class InterlockingRingsFill16Icon {
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
        stroke-width="2"
        d="M5 12.5c-2.2-.1-4-2-4-4.2C1 5.9 2.9 4 5.2 4c2.3 0 4.1 1.8 4.2 4M11 4c2.2.1 4 2 4 4.2 0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2V8"
      />
    </svg> `;
  }
}
