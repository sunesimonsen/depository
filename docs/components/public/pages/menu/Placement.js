import { html } from "@depository/view";
import { css } from "stylewars";
import { MenuButton, MenuPopup, MenuItem, Menu } from "@depository/components";

const containerStyles = css`
  & {
    text-align: center;
    padding-top: 160px;
  }
`;

export default class Example {
  static defaultProps() {
    return { id: "Placement" };
  }

  render({ id }) {
    return html`
      <div class=${containerStyles}>
        <${Menu} id=${id} placement="top-start">
          <${MenuButton}>Options<//>
          <${MenuPopup}>
            <${MenuItem} id=${id} key="one">One<//>
            <${MenuItem} id=${id} key="two">Two<//>
            <${MenuItem} id=${id} key="three">Three<//>
            <${MenuItem} id=${id} key="four">Four<//>
          <//>
        <//>
      </div>
    `;
  }
}
