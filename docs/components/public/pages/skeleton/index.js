import { html } from "@depository/view";
import { Title, SubTitle, Line, Heading } from "../../components/Page.js";
import { Example } from "../../components/Example.js";
import DefaultSkeleton from "./DefaultSkeleton.js";

class SpinnerPage {
  render() {
    return html`
      <${Title}>Spinner<//>
      <${SubTitle}>
        A Skeleton loader shows users a blank version of a page or section of a
        page into which content is gradually loaded. It provides a visual
        estimate of the space needed.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>
        Skeleton loaders are the same color as the text color at 10% opacity.
      </p>
      <${Example} src=${new URL("./DefaultSkeleton.js", import.meta.url)}>
        <${DefaultSkeleton} />
      <//>
    `;
  }
}

export default SpinnerPage;
