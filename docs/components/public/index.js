import { html } from "@depository/view";
import { styleguide, PageReference } from "@depository/styleguide";

const pages = [
  "anchor",
  "borderlayout",
  "button",
  "center",
  "checkbox",
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
  logo: new URL("./images/logo.png", import.meta.url).toString(),
  title: "DEPOSITORY",
  navigation: html`
    <h1>Buttons</h1>
    <ul>
      <li><${PageReference} id="anchor">Anchor<//></li>
      <li><${PageReference} id="button">Button<//></li>
      <li><${PageReference} id="iconbutton">Icon button<//></li>
    </ul>
    <h1>Inputs</h1>
    <ul>
      <li><${PageReference} id="textinput">TextInput<//></li>
      <li><${PageReference} id="checkbox">Checkbox<//></li>
    </ul>
    <h1>Popups</h1>
    <ul>
      <li><${PageReference} id="popup">Popup<//></li>
      <li><${PageReference} id="menu">Menu<//></li>
    </ul>
    <h1>Loaders</h1>
    <ul>
      <li><${PageReference} id="spinner">Spinner<//></li>
      <li><${PageReference} id="skeleton">Skeleton<//></li>
      <li><${PageReference} id="pulse">Pulse<//></li>
    </ul>
    <h1>Layout</h1>
    <ul>
      <li><${PageReference} id="columnlayout">Column layout<//></li>
      <li><${PageReference} id="borderlayout">Border layout<//></li>
      <li><${PageReference} id="center">Center<//></li>
    </ul>
    <h1>Icons</h1>
    <ul>
      <li><${PageReference} id="icons">Icons<//></li>
    </ul>
  `,
  pageMap,
});
