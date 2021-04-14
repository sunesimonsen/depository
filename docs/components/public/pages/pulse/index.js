import { html } from "@depository/view";
import { Title, SubTitle, Line, Heading } from "../../components/Page.js";
import { Example } from "../../components/Example.js";
import DefaultPulse from "./DefaultPulse.js";

class SpinnerPage {
  render() {
    return html`
      <${Title}>Pulse<//>
      <${SubTitle}>
        The pulse loader communicates ongoing activity after a user takes an
        action. It tells them that something is taking place.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>
        The default application of a pulse loader includes accessibility
        attributes that identify it as an indeterminate progress bar.
      </p>
      <${Example} src=${new URL("./DefaultPulse.js", import.meta.url)}>
        <${DefaultPulse} />
      <//>
    `;
  }
}

export default SpinnerPage;
