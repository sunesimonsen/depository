import { html } from "@depository/view";
import { Popup, Center } from "@depository/components";
import { css } from "stylewars";

const popupStyles = css`
  & {
    border-radius: 4px;
    background: #17494d;
    color: white;
    padding: 0.5em;
    width: 100px;
    text-align: center;
  }
`;

const anchorStyles = css`
  & {
    height: 200px;
    width: 60%;
    border: thin solid grey;
    border-radius: 4px;
  }
`;

const containerStyles = css`
  & {
    height: 300px;
  }
`;

const placements = ["top-stretch", "bottom-stretch"];

export default class Example {
  didMount() {
    for (const placement of placements) {
      this[`${placement}-popup`] = new Popup(
        this.anchorRef,
        this[`${placement}-popup-ref`],
        {
          placement,
          margins: 4,
        }
      );

      this[`${placement}-popup`].show();
    }
  }

  willUnmount() {
    for (const placement of placements) {
      this[`${placement}-popup`].hide();
    }
  }

  popupElements() {
    return placements.map(
      (placement) =>
        html`
          <div
            key="{placement}"
            ref=${this.createRef(`${placement}-popup-ref`)}
            class=${popupStyles}
          >
            ${placement}
          </div>
        `
    );
  }

  render() {
    return html`
      <${Center} class=${containerStyles}>
        <${Center} class=${anchorStyles} ref=${this.createRef("anchorRef")}>
          Anchor
        <//>
        ${this.popupElements()}
      <//>
    `;
  }
}
