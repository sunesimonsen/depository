import { html } from "@depository/view";

export default class InterlockingRingsFill12Icon {
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
        stroke-width="2"
        d="M2.5 9C1.6 8.4 1 7.4 1 6.2 1 4.5 2.5 3 4.2 3 6 3 7.4 4.3 7.5 6m2-2.5c.9.6 1.5 1.6 1.5 2.7C11 8 9.5 9.5 7.8 9.5c-1.7 0-3.1-1.3-3.2-3"
      />
    </svg> `;
  }
}
