import { html } from "@depository/view";

export default class MessengerStroke12Icon {
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
        d="M6 0c3.38 0 6 2.477 6 5.821 0 3.343-2.62 5.82-6 5.82-.607 0-1.19-.08-1.737-.23a.457.457 0 00-.321.023l-1.19.525a.482.482 0 01-.674-.424l-.032-1.068a.483.483 0 00-.162-.342C.717 9.081 0 7.57 0 5.821 0 2.477 2.619 0 6 0zm0 1C3.149 1 1 3.073 1 5.821c0 1.4.551 2.665 1.551 3.559.301.272.48.654.494 1.051l.01.302.484-.214a1.485 1.485 0 01.986-.073c.471.13.966.195 1.475.195 2.851 0 5-2.072 5-4.82S8.851 1 6 1zm3.19 3.1c.252-.191.583.111.412.379L7.84 7.275a.9.9 0 01-1.3.24L5.136 6.464a.362.362 0 00-.433.001L2.81 7.902c-.253.192-.584-.112-.413-.379L4.16 4.727a.899.899 0 011.3-.24l1.404 1.051a.36.36 0 00.431-.001z"
      />
    </svg> `;
  }
}
