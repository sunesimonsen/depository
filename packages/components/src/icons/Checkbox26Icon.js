import { html } from "@depository/view";

export default class Checkbox26Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      focusable="false"
      viewBox="0 0 26 26"
      ...${props}
    >
      <path
        fill="currentColor"
        d="M17.8 10.59L12.39 16l-.53.53a.996.996 0 01-1.41 0l-.41-.41-1.83-1.82a.87.87 0 010-1.23l.02-.01c.33-.34.88-.34 1.22 0l1.7 1.7 5.41-5.41c.34-.33.89-.33 1.22 0l.02.02c.33.34.33.88 0 1.22M19.99 5H6c-.55 0-1 .45-1 1.01V20c0 .55.45 1 1 1h13.99c.56 0 1.01-.45 1.01-1V6.01C21 5.45 20.55 5 19.99 5"
      />
    </svg> `;
  }
}