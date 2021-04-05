import { html } from "@depository/view";

export default class SpeechBubblePlainFill16Icon {
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
        d="M15 0H1C.45 0 0 .45 0 1v9.96c0 .55.45 1 1 1h2v3.34c0 .45.54.67.85.35l3.69-3.69H15c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"
      />
    </svg> `;
  }
}
