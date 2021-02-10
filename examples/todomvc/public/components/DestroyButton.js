import { html } from "@depository/view";
import { removeTodo } from "../models/todo.js";

export class DestroyButton {
  constructor() {
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { id } = this.props;
    this.dispatch(removeTodo({ id }));
  }

  render() {
    return html`<button @click=${this.onClick} class="destroy"></button> `;
  }
}
