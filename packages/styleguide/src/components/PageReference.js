import { html } from "@depository/view";
import { css, classes } from "stylewars";
import { Link } from "@nano-router/depository-view";

const styles = css`
  & {
    color: rgb(3, 54, 61);
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 4px;
    display: block;
  }

  &:hover {
    background: rgba(47, 57, 65, 0.05);
  }

  &:active {
    background: rgba(47, 57, 65, 0.1);
  }
`;

const activeStyles = css`
  & {
    background: rgba(47, 57, 65, 0.1);
  }
`;

const isActive = (id) => ({
  inputs: {
    route: "routing.route",
    pageId: "routing.params.id",
  },
  compute: ({ route, pageId }) => route === "page" && pageId === id,
});

export class PageReference {
  data({ id }) {
    return { isActive: isActive(id) };
  }

  render({ id, isActive, children, ...other }) {
    return html`
      <${Link}
        route="page"
        params=${{ id }}
        hash=""
        className=${classes(styles, isActive && activeStyles)}
        ...${other}
      >
        ${children}
      <//>
    `;
  }
}
