import { html } from "@depository/view";
import { Button, Center } from "@depository/components";

const loadingState = "components.Button.LoadingButton.loading";

export default class Example {
  constructor() {
    const setLoadingState = (isLoading) => {
      this.dispatch({ payload: { [loadingState]: isLoading } });
    };

    this.startLoading = () => {
      setLoadingState(true);

      setTimeout(() => {
        setLoadingState(false);
      }, 2000);
    };
  }

  data() {
    return { loading: loadingState };
  }

  render({ loading }) {
    return html`
      <${Center}>
        <${Button} loading=${loading} @click=${this.startLoading}>Button<//>
      <//>
    `;
  }
}
