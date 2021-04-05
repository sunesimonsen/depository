import { html } from "@depository/view";

export default class CssStroke12Icon {
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
        d="M9.5 3c.8 0 1.5.7 1.5 1.5 0 .3-.2.5-.5.5-.2 0-.4-.2-.5-.4v-.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.6.5.7l.1.1c.8.2 1.3.8 1.4 1.6v.6c0 .8-.7 1.5-1.5 1.5S8.1 8.4 8 7.6V7c0-.3.2-.5.5-.5.2 0 .4.2.5.4v.6c0 .3.2.5.5.5.2 0 .4-.2.5-.4V7c0-.3-.2-.6-.5-.7l-.2-.1C8.6 6 8 5.3 8 4.5 8 3.7 8.7 3 9.5 3zM6 3c.8 0 1.5.7 1.5 1.5 0 .3-.2.5-.5.5-.2 0-.4-.2-.5-.4v-.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.6.5.7l.1.1c.8.2 1.3.8 1.4 1.6v.6C7.5 8.3 6.8 9 6 9s-1.4-.6-1.5-1.4V7c0-.3.2-.5.5-.5.2 0 .4.2.5.4v.6c0 .3.2.5.5.5.2 0 .4-.2.5-.4V7c0-.3-.2-.6-.5-.7l-.2-.1c-.7-.2-1.3-.9-1.3-1.7C4.5 3.7 5.2 3 6 3zM2.5 3c.8 0 1.4.6 1.5 1.4V5c0 .3-.2.5-.5.5-.2 0-.4-.2-.5-.4v-.6c0-.3-.2-.5-.5-.5-.2 0-.4.2-.5.4v3.1c0 .3.2.5.5.5.2 0 .4-.2.5-.4V7c0-.3.2-.5.5-.5.2 0 .4.2.5.4v.6C4 8.3 3.3 9 2.5 9S1.1 8.4 1 7.6V4.5C1 3.7 1.7 3 2.5 3z"
      />
    </svg> `;
  }
}
