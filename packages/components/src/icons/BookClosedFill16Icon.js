import { html } from "@depository/view";

export default class BookClosedFill16Icon {
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
        d="M2.5 1.5s0-1 1-1H12s.5 0 .5.5v1.5"
      />
      <path
        fill="currentColor"
        d="M13 2H3.5c-.4 0-.5-.3-.5-.5H2v13c0 1.1.9 1.5 1.5 1.5H13c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zm-2.5 8h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5zm0-3h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5s-.2.5-.5.5z"
      />
    </svg> `;
  }
}
