import { html } from "@depository/view";
import { Page, PageSkeleton } from "./Page.js";

const statusById = (id) => `statuses.module.${id}`;

export class PageContainer {
  data({ id }) {
    return { status: statusById(id) };
  }

  loadComponent() {
    const id = this.props.id;

    this.dispatch({
      name: `Loading ${id}`,
      payload: { [statusById(id)]: "loading" },
    });

    return import(`../pages/${id}/index.js`)
      .then((Page) => {
        this.Page = Page.default;

        this.dispatch({
          name: `Ready ${id}`,
          payload: { [statusById(id)]: "ready" },
        });
      })
      .catch((e) => {
        console.error(e);
        this.dispatch({
          name: `Failed ${id}`,
          payload: { [statusById(id)]: "failed" },
        });
      });
  }

  didMount() {
    this.loadComponent();
  }

  didUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.loadComponent();
    }
  }

  render({ id, status }) {
    if (status === "failed") {
      throw new Error(`Component ${id} could not be loaded`);
    }

    if (status !== "ready") return html`<${PageSkeleton} />`;

    return html`<${Page}><${this.Page} /><//>`;
  }
}
