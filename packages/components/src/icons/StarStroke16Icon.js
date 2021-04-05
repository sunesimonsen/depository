import { html } from "@depository/view";

export default class StarStroke16Icon {
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
        d="M8 12.4l4 2.6c.4.2.9-.1.8-.5l-1.2-4.6 3.7-3c.4-.3.2-.9-.3-.9l-4.8-.3-1.7-4.5c-.2-.4-.8-.4-.9 0L5.8 5.6 1 5.9c-.5 0-.6.6-.3.9l3.7 3-1.2 4.6c-.1.5.4.8.8.6l4-2.6z"
      />
    </svg> `;
  }
}
