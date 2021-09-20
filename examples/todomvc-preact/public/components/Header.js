import { html } from "htm/preact";

export const Header = ({ children }) => html`
  <header className="header">${children}</header>
`;
