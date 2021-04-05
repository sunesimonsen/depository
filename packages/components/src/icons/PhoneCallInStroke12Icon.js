import { html } from "@depository/view";

export default class PhoneCallInStroke12Icon {
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
        fill="currentColor"
        d="M2.707 1.293l2 2a1 1 0 010 1.414L4.414 5 7 7.586l.293-.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-.232.232a3.5 3.5 0 01-4.95 0L1.061 6.475a3.5 3.5 0 010-4.95l.232-.232a1 1 0 011.414 0zM2 2l-.232.232a2.5 2.5 0 000 3.536l4.464 4.464a2.5 2.5 0 003.536 0L10 10 8 8 7 9 3 5l1-1-2-2zm5.5-2a.5.5 0 01.492.41L8 .5V4h3.5a.5.5 0 01.492.41L12 4.5a.5.5 0 01-.41.492L11.5 5h-4a.5.5 0 01-.492-.41L7 4.5v-4a.5.5 0 01.5-.5z"
      />
    </svg> `;
  }
}
