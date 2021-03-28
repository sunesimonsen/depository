import { html } from "@depository/view";

export default class InboxStroke16Icon {
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
        <rect width="13" height="15" x="1.5" y=".5" rx=".5" ry=".5" />
        <path
          stroke-linecap="round"
          d="M1.5 10.5h3V12a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1.5h3m-10-7h7m-7 2h7m-7 2h7"
        />
      </g>
    </svg> `;
  }
}
