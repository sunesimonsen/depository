import { html } from "@depository/view";
import { Popup, Button, ScrollArea } from "@depository/components";
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
    height: 200px;
  }
`;

export default class Example {
  didMount() {
    this.popup = new Popup(this.anchorRef, this.popupRef, {
      overflow: "flip",
      margins: 4,
    });

    this.popup.show();
  }

  willUnmount() {
    this.popup.hide();
  }

  render() {
    return html`
      <${ScrollArea} class=${containerStyles}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          placerat nulla molestie eros elementum, id aliquam augue pretium.
          Suspendisse consectetur tincidunt lectus, nec imperdiet nibh molestie
          at. Integer lorem nulla, consequat quis augue sed, accumsan
          consectetur ipsum. Nulla venenatis sapien in imperdiet consectetur.
          Nullam vestibulum nibh nibh, at tristique elit commodo non. Fusce
          euismod urna quis massa luctus mollis. Vivamus accumsan leo a nisl
          luctus ultricies sit amet in lorem. Praesent ultrices a augue sit amet
          lacinia. Vestibulum at quam mattis, eleifend libero eget, imperdiet
          purus. Quisque ligula metus, suscipit sed quam ut, tempor placerat
          enim. Integer volutpat, magna non interdum volutpat, augue sem gravida
          purus, nec pellentesque massa mi accumsan odio. Nunc bibendum accumsan
          fringilla. Donec quis urna velit. Quisque vitae sollicitudin odio, sit
          amet imperdiet orci. Aenean blandit fermentum sem, ut mattis velit
          interdum at. Duis cursus non ipsum tincidunt rhoncus.
        </p>
        <${Button} ref=${this.createRef("anchorRef")}>Anchor<//>
        <div ref=${this.createRef("popupRef")} class=${popupStyles}>
          Popup content
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          placerat nulla molestie eros elementum, id aliquam augue pretium.
          Suspendisse consectetur tincidunt lectus, nec imperdiet nibh molestie
          at. Integer lorem nulla, consequat quis augue sed, accumsan
          consectetur ipsum. Nulla venenatis sapien in imperdiet consectetur.
          Nullam vestibulum nibh nibh, at tristique elit commodo non. Fusce
          euismod urna quis massa luctus mollis. Vivamus accumsan leo a nisl
          luctus ultricies sit amet in lorem. Praesent ultrices a augue sit amet
          lacinia. Vestibulum at quam mattis, eleifend libero eget, imperdiet
          purus. Quisque ligula metus, suscipit sed quam ut, tempor placerat
          enim. Integer volutpat, magna non interdum volutpat, augue sem gravida
          purus, nec pellentesque massa mi accumsan odio. Nunc bibendum accumsan
          fringilla. Donec quis urna velit. Quisque vitae sollicitudin odio, sit
          amet imperdiet orci. Aenean blandit fermentum sem, ut mattis velit
          interdum at. Duis cursus non ipsum tincidunt rhoncus.
        </p>
      <//>
    `;
  }
}
