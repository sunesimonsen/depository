import { html } from "@depository/view";
import { Button, Center } from "@depository/components";

export default class Example {
  constructor() {
    this.sayHello = () => {
      alert("Hello");
    };
  }

  render() {
    return html`
      <${Center}><${Button} onClick=${this.sayHello} disabled>Button<//><//>
    `;
  }
}
