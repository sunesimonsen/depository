import { html } from "@depository/view";

export default class BuildingStroke16Icon {
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
        d="M13 .5H3c-.3 0-.5.2-.5.5v14c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.5v-3c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v3c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.5V1c0-.3-.2-.5-.5-.5z"
      />
      <path
        fill="currentColor"
        d="M5 7h2v2H5zm4 0h2v2H9zM5 3h2v2H5zm4 0h2v2H9z"
      />
    </svg> `;
  }
}
