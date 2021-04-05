import { html } from "@depository/view";

export default class BoldStroke12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <path
        fill="currentColor"
        d="M5.4 1c1.69 0 3.1 1.336 3.1 3 0 .95-.46 1.794-1.17 2.342C8.317 6.842 9 7.842 9 9c0 1.664-1.41 3-3.1 3H2.5a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h2.9zM3 11h2.9C7.05 11 8 10.1 8 9s-.95-2-2.1-2H3v4zm2.4-9H3v4h2.4c1.15 0 2.1-.9 2.1-2s-.95-2-2.1-2z"
      />
    </svg> `;
  }
}
