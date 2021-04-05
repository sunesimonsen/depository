import { html } from "@depository/view";

export default class DownloadStroke16Icon {
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
        d="M1.5 15.5h13m-11-7l4.1 4.1c.2.2.5.2.7 0l4.1-4.1m-4.4 4V.5"
      />
    </svg> `;
  }
}
