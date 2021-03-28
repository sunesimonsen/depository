import { html } from "@depository/view";

export default class WechatFill12Icon {
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
        d="M5.01.5c2.762 0 5.01 1.86 5.01 4.147 0 .222-.027.442-.069.66C11.161 5.827 12 6.873 12 8.09c0 .595-.208 1.144-.55 1.618l.22 1.791-1.411-.765a4.244 4.244 0 01-1.997.495c-1.786 0-3.28-1.06-3.647-2.47a5.704 5.704 0 01-2.16-.565L.46 9.023l.304-2.202C.288 6.188 0 5.447 0 4.647 0 2.361 2.248.5 5.01.5zm3.252 5.453c-1.51 0-2.738.96-2.738 2.138 0 1.18 1.229 2.138 2.738 2.138 1.51 0 2.738-.959 2.738-2.138 0-.88-.685-1.637-1.662-1.964l-.029-.01a3.388 3.388 0 00-1.047-.164zm-1.264 1.08a.518.518 0 11-.001 1.037.518.518 0 01.001-1.037zm2.522 0a.52.52 0 110 1.038.52.52 0 010-1.038zM7.121 2.99a.703.703 0 100 1.41.703.703 0 000-1.41zm-3.834 0a.703.703 0 100 1.41.703.703 0 000-1.41z"
      />
    </svg> `;
  }
}
