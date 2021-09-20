import { html } from "@depository/view";
import { Checkbox, ColumnLayout, Center } from "@depository/components";

const updateIngredient = (id, checked) => ({
  payload: {
    [`examples.checkbox.ingredients.${id}`]: checked,
  },
});

class SelectedIngredients {
  data() {
    return { ingredients: "examples.checkbox.ingredients" };
  }

  render({ ingredients = {} }) {
    const selectedingredients = Object.entries(ingredients)
      .filter(([_, checked]) => checked)
      .map(([key]) => key)
      .sort();

    return html`Selected: ${selectedingredients.join(", ") || "nothing"}`;
  }
}

class IngredientCheckbox {
  constructor({ id }) {
    this.updateIngredient = (e) => {
      this.dispatch(updateIngredient(id, e.target.checked));
    };
  }

  data({ id }) {
    return { checked: `examples.checkbox.ingredients.${id}` };
  }

  render({ id, checked }) {
    return html`
      <${Checkbox}
        id=${id}
        .checked=${checked}
        onChange=${this.updateIngredient}
      />
      <label for=${id}>${id}</label>
    `;
  }
}
export default class Example {
  data() {
    return { ingredients: "examples.checkbox.ingredients" };
  }

  render({ ingredients }) {
    return html`
      <${Center}>
        <${ColumnLayout} stretched columns="1" justifyItems="start">
          <h4>Burger ingredients</h4>
          <${ColumnLayout} columns="auto auto" justifyItems="start">
            <${IngredientCheckbox} id="tomatoes" />
            <${IngredientCheckbox} id="cucumbers" />
            <${IngredientCheckbox} id="lettuce" />
            <${IngredientCheckbox} id="beef" />
          <//>
          <${SelectedIngredients} />
        <//>
      <//>
    `;
  }
}
