import { html } from "@depository/view";

export default class TwitterStroke12Icon {
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
        d="M7.922 1a3.07 3.07 0 011.743.539 3.15 3.15 0 00.555-.255l.096-.05C11.088.882 12 2 12 3s-1 1-1.021 1.472C10.867 7.965 8.069 11 4.146 11A6.864 6.864 0 01.465 9.937c-.9-.57-.404-1.963.653-1.837l.182.015.19.006c.066 0 .13-.002.195-.006-.224-.279-.4-.6-.516-.95a1.002 1.002 0 01-.048-.378A2.994 2.994 0 01.4 4.839l.007-.144a.982.982 0 01.147-.416 2.988 2.988 0 01.28-2.419 1 1 0 011.631-.129 4.842 4.842 0 002.487 1.591A3.046 3.046 0 017.922 1zm.001 1c-1.133 0-2.052.904-2.052 2.02 0 .158.019.312.054.46a5.856 5.856 0 01-4.229-2.11 1.988 1.988 0 00-.277 1.015c0 .7.361 1.319.912 1.682a2.074 2.074 0 01-.93-.253L1.408 5a2.034 2.034 0 001.639 1.82c-.303.08-.62.092-.927.034a2.053 2.053 0 001.916 1.403A4.154 4.154 0 011 9.093 5.86 5.86 0 004.145 10c3.773 0 5.837-3.077 5.837-5.746l-.005-.262A4.14 4.14 0 0011 2.947c-.375.163-.772.27-1.18.318.43-.252.75-.65.903-1.117a4.16 4.16 0 01-1.303.49A2.062 2.062 0 007.923 2z"
      />
    </svg> `;
  }
}