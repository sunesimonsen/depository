import { html } from "@depository/view";

export default class GearStroke12Icon {
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
        d="M9.79 2.39l-1.21.52c-.35-.29-.76-.53-1.2-.69L7.23.9a.361.361 0 00-.29-.32C6.63.53 6.32.5 6 .5c-.32 0-.63.03-.94.08-.16.03-.27.16-.29.32l-.16 1.32c-.44.16-.84.39-1.2.69l-1.2-.52c-.15-.06-.33-.03-.43.1-.4.47-.72 1.01-.94 1.61-.06.15 0 .33.13.42l1.06.79a3.935 3.935 0 000 1.38l-1.06.79c-.13.1-.19.27-.13.42.22.6.54 1.14.94 1.62.1.12.28.16.43.1l1.21-.52c.35.29.76.53 1.2.69l.15 1.31c.02.16.14.29.3.32.3.05.61.08.93.08.32 0 .63-.03.94-.08.16-.03.28-.16.3-.32l.15-1.31c.44-.16.84-.39 1.2-.69l1.21.52c.15.06.33.03.43-.1.4-.48.72-1.02.94-1.62.06-.15 0-.32-.13-.42l-1.07-.79a3.935 3.935 0 000-1.38l1.06-.79c.13-.1.19-.27.13-.42-.22-.59-.54-1.14-.94-1.62a.365.365 0 00-.43-.09z"
      />
      <circle cx="6" cy="6" r="1.5" fill="none" stroke="currentColor" />
    </svg> `;
  }
}
