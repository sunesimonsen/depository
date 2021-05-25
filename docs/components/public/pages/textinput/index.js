import { html } from "@depository/view";
import { Title, SubTitle, Line, Heading } from "../../components/Page.js";
import { Example } from "../../components/Example.js";
import DefaultInput from "./DefaultInput.js";
import MediaInput from "./MediaInput.js";

class InputPage {
  render() {
    return html`
      <${Title}>TextInput<//>
      <${SubTitle}>An Input lets users enter text into a field.<//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>A basic text input field.</p>
      <${Example} src=${new URL("./DefaultInput.js", import.meta.url)}>
        <${DefaultInput} />
      <//>
      <${Heading} level="3">Media input<//>
      <p>Media elements add even more context to an input.</p>
      <${Example} src=${new URL("./MediaInput.js", import.meta.url)}>
        <${MediaInput} />
      <//>
    `;
  }
}

export default InputPage;
