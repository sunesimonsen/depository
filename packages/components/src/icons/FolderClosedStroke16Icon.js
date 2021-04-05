import { html } from "@depository/view";

export default class FolderClosedStroke16Icon {
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
        d="M2 14.5h12c.3 0 .5-.2.5-.5V5c0-.3-.2-.5-.5-.5H8.5v-1c0-.6-.4-1-1-1h-5c-.6 0-1 .4-1 1V14c0 .3.2.5.5.5z"
      />
    </svg> `;
  }
}
