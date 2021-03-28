import { html } from "@depository/view";

export default class TrashFill16Icon {
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
        d="M3 2.5h10"
      />
      <path
        fill="currentColor"
        d="M3 4v11c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4H3zm4 9.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5v7zm3 0c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-7c0-.28.22-.5.5-.5s.5.22.5.5v7zM10 3H6V1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2z"
      />
    </svg> `;
  }
}
