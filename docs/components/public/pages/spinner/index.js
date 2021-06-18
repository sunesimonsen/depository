import { html } from "@depository/view";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@depository/styleguide";
import DefaultSpinner from "./DefaultSpinner.js";

class SpinnerPage {
  render() {
    return html`
      <${Title}>Spinner<//>
      <${SubTitle}>
        A Spinner appears before a page is loaded to assure a user that the
        content is on its way.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>
        Spinners communicate a loading state for an unspecified amount of time.
      </p>
      <${Example} src=${new URL("./DefaultSpinner.js", import.meta.url)}>
        <${DefaultSpinner} />
      <//>
    `;
  }
}

export default SpinnerPage;
