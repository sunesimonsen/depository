import { createElement } from "react";
import htm from "htm";
import ReactDOM from "react-dom";

export const render = ReactDOM.render;

export const h = createElement;
export const html = htm.bind(h);
