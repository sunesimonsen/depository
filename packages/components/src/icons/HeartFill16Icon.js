import { html } from "@depository/view";

export default class HeartFill16Icon {
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
        d="M8 16a.46.46 0 01-.33-.13c-.21-.19-5.08-4.6-7.07-8.13C.2 7.04 0 6.28 0 5.5 0 3.02 2.02 1 4.5 1c1.37 0 2.65.64 3.5 1.7.85-1.06 2.13-1.7 3.5-1.7C13.98 1 16 3.02 16 5.5c0 .78-.2 1.54-.6 2.25-1.98 3.53-6.86 7.94-7.07 8.13-.09.08-.21.12-.33.12z"
      />
    </svg> `;
  }
}
