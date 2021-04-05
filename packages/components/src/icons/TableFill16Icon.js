import { html } from "@depository/view";

export default class TableFill16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <rect
        width="15"
        height="15"
        x=".5"
        y=".5"
        fill="none"
        stroke="currentColor"
        rx=".5"
        ry=".5"
      />
      <path
        fill="currentColor"
        d="M.5.5h15V4H.5zm4.5 3h1v12H5zm5 0h1v12h-1zM.5 7h15v1H.5zm0 4h15v1H.5z"
      />
    </svg> `;
  }
}
