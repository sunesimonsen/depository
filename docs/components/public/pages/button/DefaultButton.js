import { html } from "@depository/view";
import { Button } from "@depository/components";

export default class Example {
  constructor() {
    this.sayHello = () => {
      alert("Hello");
    };
  }

  render() {
    return html`<${Button} @click=${this.sayHello}>Button<//>`;
  }
}
