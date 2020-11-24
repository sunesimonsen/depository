import { html } from "htm/preact";

export const ToggleAll = () => html`
  <input id="toggle-all" class="toggle-all" type="checkbox" />
  <label for="toggle-all">Mark all as complete</label>
`;
