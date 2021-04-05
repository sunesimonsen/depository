import { html } from "@depository/view";

export default class PhoneCallInStroke16Icon {
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
        d="M9.999 5.997h5.5a.5.5 0 110 1h-6a.5.5 0 01-.5-.5V.5a.5.5 0 011 0v5.497zM3.707 2.293l2 2a1 1 0 010 1.414L4.414 7 9 11.586l1.293-1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-1.232 1.232a3.5 3.5 0 01-4.95 0L1.061 8.475a3.5 3.5 0 010-4.95l1.232-1.232a1 1 0 011.414 0zM3 3L1.768 4.232a2.5 2.5 0 000 3.536l6.464 6.464a2.5 2.5 0 003.536 0L13 13l-2-2-2 2-6-6 2-2-2-2z"
      />
    </svg> `;
  }
}