import { html } from "@depository/view";
import {
  todoById,
  updateTodo,
  stopEditingTodo,
} from "@depository/todomvc-model";

export class EditInput {
  constructor() {
    this.onKeyDown = (e) => {
      if (e.code === "Enter") {
        this.dispatch(
          updateTodo({ id: this.props.id, text: e.target.value.trim() })
        );
        e.target.value = "";
      }
    };

    this.onBlur = () => {
      this.dispatch(stopEditingTodo({ id: this.props.id }));
    };
  }

  data({ id }) {
    return { todo: todoById(id) };
  }

  didMount() {
    this.input.focus();
  }

  render({ todo }) {
    return html`
      <input
        ref=${this.createRef("input")}
        className="edit"
        .value=${todo.text}
        onKeyDown=${this.onKeyDown}
        onBlur=${this.onBlur}
      />
    `;
  }
}
