import { html } from "@depository/view";

export default class BookOpenStroke16Icon {
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
        d="M8.2 2.7c.8-.4 3.6-1.6 6.9-1 .2 0 .4.3.4.5v11.7c0 .3-.3.5-.6.5-3.2-.6-5.9.6-6.7 1-.1.1-.3.1-.4 0-.8-.4-3.5-1.6-6.7-1-.3.1-.6-.2-.6-.5V2.2c0-.2.2-.4.4-.5 3.2-.7 6.1.6 6.9 1h.4zM3 4.5c1.2 0 2.2.2 3.1.5M3 7.5c1.2 0 2.2.2 3.1.5M3 10.5c1.2 0 2.2.2 3.1.5m7-6.5c-1.2 0-2.2.2-3.1.5m3.1 2.5c-1.2 0-2.2.2-3.1.5m3.1 2.5c-1.2 0-2.2.2-3.1.5"
      />
    </svg> `;
  }
}
