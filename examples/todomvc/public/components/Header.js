import { html } from "@depository/view";

export class Header {
  render({ children }) {
    return html`<header class="header">${children}</header>`;
  }
}
