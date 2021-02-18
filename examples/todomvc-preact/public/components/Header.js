import { html } from "htm/preact";

export const Header = ({ children }) => html`
  <header class="header">${children}</header>
`;
