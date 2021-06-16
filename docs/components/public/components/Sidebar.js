import { html } from "@depository/view";
import { css } from "stylewars";
import { PageReference } from "./PageReference.js";

const listStyles = css`
  & {
    padding: 0;
    margin: 0;
  }
`;

export class List {
  render({ children }) {
    return html`
      <ul class=${listStyles}>
        ${children}
      </ul>
    `;
  }
}

const listItemStyles = css`
  & {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`;

export class ListItem {
  render({ children }) {
    return html`<li class=${listItemStyles}>${children}</li>`;
  }
}

const sidebarStyles = css`
  & {
    padding: 16px;
  }
`;

export class Sidebar {
  render() {
    return html`
      <nav class=${sidebarStyles}>
        <${List}>
          <${ListItem}><${PageReference} id="anchor">Anchor<//><//>
          <${ListItem}><${PageReference} id="button">Button<//><//>
          <${ListItem}><${PageReference} id="iconbutton">Icon button<//><//>
          <${ListItem}><${PageReference} id="columnlayout">Column layout<//><//>
          <${ListItem}><${PageReference} id="borderlayout">Border layout<//><//>
          <${ListItem}><${PageReference} id="center">Center<//><//>
          <${ListItem}><${PageReference} id="spinner">Spinner<//><//>
          <${ListItem}><${PageReference} id="skeleton">Skeleton<//><//>
          <${ListItem}><${PageReference} id="pulse">Pulse<//><//>
          <${ListItem}><${PageReference} id="popup">Popup<//><//>
          <${ListItem}><${PageReference} id="menu">Menu<//><//>
          <${ListItem}><${PageReference} id="icons">Icons<//><//>
          <${ListItem}><${PageReference} id="textinput">TextInput<//><//>
        <//>
      </nav>
    `;
  }
}
