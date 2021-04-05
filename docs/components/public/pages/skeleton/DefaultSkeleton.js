import { html } from "@depository/view";
import { Skeleton } from "@depository/components";

export default class Example {
  render() {
    return html`
      <section>
        <h1><${Skeleton} /></h1>
        <p>
          <${Skeleton} />
          <${Skeleton} />
          <${Skeleton} />
        </p>
      </section>
    `;
  }
}
