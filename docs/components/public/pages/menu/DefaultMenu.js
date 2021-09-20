import { html } from "@depository/view";
import { css } from "stylewars";
import { MenuButton, MenuPopup, MenuItem, Menu } from "@depository/components";

const containerStyles = css`
  & {
    text-align: center;
    padding-bottom: 160px;
  }
`;

export default class Example {
  static defaultProps() {
    return { id: "DefaultMenu" };
  }

  constructor() {
    this.onSelect = (e) => {
      const { key, value } = e.detail;
      alert(`${key}:${value}`);
    };
  }

  render({ id }) {
    return html`
      <div className=${containerStyles}>
        <${Menu} id=${id} onSelectItem=${this.onSelect}>
          <${MenuButton}>Options<//>
          <${MenuPopup}>
            <${MenuItem} id=${id} key="one" value=${1}>One<//>
            <${MenuItem} id=${id} key="two" value=${2}>Two<//>
            <${MenuItem} id=${id} key="three" value=${3}>Three<//>
            <${MenuItem} id=${id} key="four" value=${4}>Four<//>
          <//>
        <//>
      </div>
    `;
  }
}
