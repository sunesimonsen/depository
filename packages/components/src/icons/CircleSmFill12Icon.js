import { html } from "@depository/view";

export default class CircleSmFill12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <circle cx="6" cy="6" r="2" fill="currentColor" />
    </svg> `;
  }
}
