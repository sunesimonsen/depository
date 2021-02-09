import { html } from "@depository/view";
import { removeTodo } from "../models/todo.js";

export class DestroyButton {
  onClick() {
    const { id } = this.props;
    this.dispatch(removeTodo({ id }));
  }

  render() {
    return html`<button onClick=${this.onClick} class="destroy"></button> `;
  }
}
