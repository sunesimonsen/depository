import { html } from "@depository/view";

export default class FilterFill16Icon {
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
        d="M7 15.57c-.16 0-.32-.04-.47-.12a.995.995 0 01-.53-.88V7.71l-5-5C.71 2.42.63 1.99.78 1.62S1.3 1 1.71 1H14.3c.41 0 .77.24.92.62s.07.8-.22 1.09l-5 5v5.53c0 .33-.17.65-.44.83l-2 1.33c-.17.11-.37.17-.56.17z"
      />
    </svg> `;
  }
}