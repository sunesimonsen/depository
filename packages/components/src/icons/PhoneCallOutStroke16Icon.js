import { html } from "@depository/view";

export default class PhoneCallOutStroke16Icon {
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
        d="M3.707 2.293l2 2a1 1 0 010 1.414L4.414 7 9 11.586l1.293-1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-1.232 1.232a3.5 3.5 0 01-4.95 0L1.061 8.475a3.5 3.5 0 010-4.95l1.232-1.232a1 1 0 011.414 0zM3 3L1.768 4.232a2.5 2.5 0 000 3.536l6.464 6.464a2.5 2.5 0 003.536 0L13 13l-2-2-2 2-6-6 2-2-2-2zm4.5 0a.5.5 0 010-1h6a.5.5 0 01.5.5v6a.5.5 0 11-1 0V3H7.5z"
      />
    </svg> `;
  }
}
