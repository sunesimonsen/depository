import { html } from "@depository/view";
import { Popup, Button } from "@depository/components";
import { css } from "stylewars";

const popupStyles = css`
  & {
    border: thin solid grey;
    border-radius: 4px;
    padding: 1em;
    background: white;
  }
`;

const containerStyles = css`
  & {
    text-align: center;
    height: 100px;
  }
`;

export default class Example {
  didMount() {
    this.popup = new Popup(this.anchorRef, this.popupRef);

    this.popup.show();
  }

  willUnmount() {
    this.popup.hide();
  }

  render() {
    return html`
      <div class=${containerStyles}>
        <${Button} ref=${this.createRef("anchorRef")}>Anchor<//>
        <div ref=${this.createRef("popupRef")} class=${popupStyles}>
          Popup content
        </div>
      </div>
    `;
  }
}
