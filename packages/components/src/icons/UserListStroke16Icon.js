import { html } from "@depository/view";

export default class UserListStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <g fill="none" stroke="currentColor">
        <circle cx="5" cy="5" r="2.5" />
        <path
          stroke-linecap="round"
          d="M9.5 5.5h6m-6 3h6m-4 3h4m-6 2c-.2-2.3-2.2-4-4.5-4s-4.3 1.8-4.5 4"
        />
      </g>
    </svg> `;
  }
}
