import { html } from "@depository/view";

export default class App26Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      focusable="false"
      viewBox="0 0 26 26"
      ...${props}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 8l9-5 9 5v9.7L13 23l-9-5.2zm9 5L4 8m9 5l9-5m-9 5v10"
      />
    </svg> `;
  }
}
