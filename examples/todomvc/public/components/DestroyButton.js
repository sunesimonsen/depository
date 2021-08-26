import { html } from "@depository/view";
import { removeTodo } from "@depository/todomvc-model";

export class DestroyButton {
  constructor() {
    this.onClick = () => {
      this.dispatch(removeTodo({ id: this.props.id }));
    };
  }

  render() {
    return html`<button @click=${this.onClick} class="destroy"></button> `;
  }
}
