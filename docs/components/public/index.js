import { html } from "@depository/view";

import {
  styleguide,
  List,
  ListItem,
  Heading,
  PageReference,
} from "./styleguide.js";

const pages = [
  "anchor",
  "borderlayout",
  "button",
  "center",
  "columnlayout",
  "iconbutton",
  "icons",
  "index",
  "menu",
  "popup",
  "pulse",
  "skeleton",
  "spinner",
  "textinput",
];

const pageMap = Object.fromEntries(
  pages.map((id) => [id, () => import(`./pages/${id}/index.js`)])
);

styleguide({
  navigation: html`
    <${Heading}>Buttons<//>
    <${List}>
      <${ListItem}><${PageReference} id="anchor">Anchor<//><//>
      <${ListItem}><${PageReference} id="button">Button<//><//>
      <${ListItem}><${PageReference} id="iconbutton">Icon button<//><//>
    <//>
    <${Heading}>Inputs<//>
    <${List}>
      <${ListItem}><${PageReference} id="textinput">TextInput<//><//>
    <//>
    <${Heading}>Popups<//>
    <${List}>
      <${ListItem}><${PageReference} id="popup">Popup<//><//>
      <${ListItem}><${PageReference} id="menu">Menu<//><//>
    <//>
    <${Heading}>Loaders<//>
    <${List}>
      <${ListItem}><${PageReference} id="spinner">Spinner<//><//>
      <${ListItem}><${PageReference} id="skeleton">Skeleton<//><//>
      <${ListItem}><${PageReference} id="pulse">Pulse<//><//>
    <//>
    <${Heading}>Layout<//>
    <${List}>
      <${ListItem}><${PageReference} id="columnlayout">Column layout<//><//>
      <${ListItem}><${PageReference} id="borderlayout">Border layout<//><//>
      <${ListItem}><${PageReference} id="center">Center<//><//>
    <//>
    <${Heading}>Icons<//>
    <${List}>
      <${ListItem}><${PageReference} id="icons">Icons<//><//>
    <//>
  `,
  pageMap,
});
