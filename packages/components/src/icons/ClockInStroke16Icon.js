import { html } from "@depository/view";

export default class ClockInStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <path
        fill="currentColor"
        d="M15.5 9a.5.5 0 01.5.5 3.5 3.5 0 01-3.308 3.495L12.5 13H7.708l1.146 1.146a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-2-2-.037-.042-.042-.062-.03-.06-.02-.062-.012-.054-.003-.032L6 12.5l.003-.053.014-.075.02-.063.052-.093.046-.057 2.011-2.013a.5.5 0 01.765.638l-.057.07L7.707 12H12.5A2.5 2.5 0 0015 9.5a.5.5 0 01.5-.5zM6 0a6 6 0 014 10.472 1.495 1.495 0 00-.339-.922l-.068-.074.17-.184A5 5 0 105.88 11l-.44.44-.104.114a1.49 1.49 0 00-.225.38A6 6 0 016 0zm.5 2a.5.5 0 01.492.41L7 2.5v4a.5.5 0 01-.41.492L6.5 7h-3a.5.5 0 01-.09-.992L3.5 6H6V2.5a.5.5 0 01.41-.492L6.5 2z"
      />
    </svg> `;
  }
}