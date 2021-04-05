import { html } from "@depository/view";

export default class CssFill12Icon {
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
        d="M11.3 0c.4 0 .7.3.7.8v10.5c0 .4-.3.7-.7.7H.8c-.5 0-.8-.3-.8-.7V.8C0 .3.3 0 .8 0h10.5zM9.5 3C8.7 3 8 3.7 8 4.5s.5 1.4 1.2 1.7l.3.1c.3.1.5.3.5.6v.7c-.1.2-.3.4-.5.4s-.4-.2-.5-.4v-.7c-.1-.2-.3-.4-.5-.4s-.4.2-.5.4v.7c.1.8.7 1.4 1.5 1.4s1.4-.6 1.5-1.4v-.7c-.1-.7-.5-1.4-1.2-1.6h-.2l-.1-.1c-.3-.1-.5-.4-.5-.7 0-.3.2-.5.5-.5.2 0 .4.2.5.4v.2c.1.2.3.4.5.4.3 0 .5-.2.5-.5 0-.8-.7-1.5-1.5-1.5zM6 3c-.8 0-1.5.7-1.5 1.5S5 5.9 5.7 6.2l.3.1c.3.1.5.3.5.6v.7c-.1.2-.3.4-.5.4s-.4-.2-.5-.4v-.7c-.1-.2-.3-.4-.5-.4s-.4.2-.5.4v.7C4.6 8.4 5.2 9 6 9s1.4-.6 1.5-1.4v-.7c-.1-.7-.5-1.4-1.2-1.6h-.2L6 5.2c-.3-.1-.5-.4-.5-.7 0-.3.2-.5.5-.5.2 0 .4.2.5.4v.2c.1.2.3.4.5.4.3 0 .5-.2.5-.5C7.5 3.7 6.8 3 6 3zM2.5 3c-.8 0-1.4.6-1.5 1.4v3.2c.1.8.7 1.4 1.5 1.4S3.9 8.4 4 7.6v-.7c-.1-.2-.3-.4-.5-.4s-.4.2-.5.4v.7c-.1.2-.3.4-.5.4s-.4-.2-.5-.4V4.4c.1-.2.3-.4.5-.4s.4.2.5.4v.7c.1.2.3.4.5.4s.4-.2.5-.4v-.7C3.9 3.6 3.3 3 2.5 3z"
      />
    </svg> `;
  }
}
