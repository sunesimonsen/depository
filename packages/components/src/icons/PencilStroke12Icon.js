import { html } from "@depository/view";

export default class PencilStroke12Icon {
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
        stroke-linejoin="round"
        d="M.5 11.5v-2L9.1.9c.2-.2.5-.2.7 0l1.3 1.3c.2.2.2.5 0 .7l-8.6 8.6h-2zm7-9l2 2"
      />
    </svg> `;
  }
}
