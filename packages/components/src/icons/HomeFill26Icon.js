import { html } from "@depository/view";

export default class HomeFill26Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      focusable="false"
      viewBox="0 0 26 26"
      ...${props}
    >
      <path
        fill="currentColor"
        d="M23.885 13.2l-1.328 1.639a.522.522 0 01-.737.084l-1.444-1.155v7.182c0 .577-.474 1.05-1.054 1.05H16.51c-.58 0-1.054-.473-1.054-1.05v-3.182a2.43 2.43 0 00-.716-1.732 2.448 2.448 0 00-1.74-.714 2.45 2.45 0 00-1.739.714 2.43 2.43 0 00-.716 1.732v3.182c0 .577-.474 1.05-1.054 1.05H6.678c-.582 0-1.054-.47-1.054-1.05v-7.182L4.18 14.923a.522.522 0 01-.737-.084L2.115 13.2a.52.52 0 01.084-.735l10.474-8.348a.51.51 0 01.654 0L23.8 12.466a.52.52 0 01.084.735"
      />
    </svg> `;
  }
}
