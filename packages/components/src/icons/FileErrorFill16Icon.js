import { html } from "@depository/view";

export default class FileErrorFill16Icon {
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
        fill="currentColor"
        d="M10 3.5v-3c0-.28-.22-.5-.5-.5H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5.5c0-.28-.22-.5-.5-.5h-3c-.83 0-1.5-.67-1.5-1.5zm.94 8.56c.24.24.24.64 0 .88-.12.12-.28.18-.44.18s-.32-.06-.44-.18L8 10.88l-2.06 2.06c-.12.12-.28.18-.44.18s-.32-.06-.44-.18a.628.628 0 010-.88L7.12 10 5.06 7.94c-.24-.24-.24-.64 0-.88s.64-.24.88 0L8 9.12l2.06-2.06c.24-.24.64-.24.88 0s.24.64 0 .88L8.88 10l2.06 2.06zM11 .5V3c0 .55.45 1 1 1h2.5c.45 0 .67-.54.35-.85l-3-3C11.54-.17 11 .06 11 .5z"
      />
    </svg> `;
  }
}
