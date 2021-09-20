import { html } from "@depository/view";
import { css } from "stylewars";
import {
  Center,
  ColumnLayout,
  Select,
  SelectInput,
  SelectOption,
  SelectPopup,
} from "@depository/components";

const containerStyles = css`
  & {
    padding-bottom: 160px;
  }
`;

const id = "examples.DefaultSelect";
const seletedPath = `${id}.selected`;

const labels = {
  ford: "Ford",
  kia: "Kia",
  mazda: "Mazda",
  skoda: "Skoda",
};

const options = ["ford", "kia", "mazda", "skoda"];

export default class Example {
  static defaultProps() {
    return { selected: options[1] };
  }

  data() {
    return { selected: seletedPath };
  }

  constructor({ id }) {
    this.onSelect = (e) => {
      const { key } = e.detail;

      this.dispatch({
        name: "setSelectedItem",
        payload: {
          [seletedPath]: key,
        },
      });
    };
  }

  render({ selected }) {
    return html`
      <${Center} class=${containerStyles}>
        <${ColumnLayout} columns="auto 300px">
          <label for=${id}>Brand</label>
          <${Select} id=${id} @selectItem=${this.onSelect}>
            <${SelectInput} .value=${labels[selected]}>${labels[selected]}<//>
            <${SelectPopup}>
              ${options.map(
                (option) => html`
                  <${SelectOption}
                    id=${id}
                    selected=${option === selected}
                    key=${option}
                    value=${option}
                  >
                    ${labels[option]}
                  <//>
                `
              )}
            <//>
          <//>
        <//>
      <//>
    `;
  }
}
