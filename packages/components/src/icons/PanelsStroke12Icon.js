import { html } from "@depository/view";

export default class PanelsStroke12Icon {
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
        d="M10 11.5H2c-.3 0-.5-.2-.5-.5V1c0-.3.2-.5.5-.5h8c.3 0 .5.2.5.5v10c0 .3-.2.5-.5.5zM5.5.5v11m-4-3h4m0-5h5"
      />
    </svg> `;
  }
}
