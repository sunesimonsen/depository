import { html } from "@depository/view";

export default class CheckBadgeStroke16Icon {
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
        d="M5.063 2.616l-1.47.002-.147.005a1.977 1.977 0 00-1.828 1.971l-.002 1.469-1.038 1.04-.115.126A1.977 1.977 0 00.58 9.898l1.037 1.037.002 1.471.005.148a1.977 1.977 0 001.971 1.828l1.468-.001 1.04 1.04.126.116a1.977 1.977 0 002.67-.116l1.036-1.04 1.471.001.148-.005a1.977 1.977 0 001.83-1.971l-.002-1.472 1.04-1.036.115-.126a1.977 1.977 0 00-.115-2.67l-1.04-1.04.001-1.467-.005-.148a1.977 1.977 0 00-1.971-1.83l-1.471-.001-1.037-1.037a1.976 1.976 0 00-2.796 0l-1.04 1.037zm3.127-.33l1.331 1.331h1.885c.539 0 .976.438.976.977v1.883l1.332 1.333c.381.38.381 1 0 1.38l-1.333 1.331.001 1.885a.976.976 0 01-.976.976H9.52l-1.33 1.332a.976.976 0 01-1.381 0l-1.333-1.333-1.883.001a.976.976 0 01-.976-.976l-.001-1.885-1.331-1.33a.976.976 0 010-1.381l1.331-1.333V4.594c0-.539.438-.976.977-.976l1.883-.001L6.81 2.286a.976.976 0 011.38 0zm2.664 3.86a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L6.5 9.793l3.646-3.647a.5.5 0 01.708 0z"
      />
    </svg> `;
  }
}
