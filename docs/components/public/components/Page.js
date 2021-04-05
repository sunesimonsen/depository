import { html } from "@depository/view";
import { css, classes } from "stylewars";
import { IconButton } from "@depository/components";
import LinkStroke16Icon from "@depository/components/icons/LinkStroke16Icon";

const containerStyles = css`
  & {
    overflow: auto;
  }
`;

const contentStyles = css`
  & {
    max-width: 800px;
    margin: 30px auto;
  }
`;

export class Page {
  didMount() {
    const hash = this.context.router.location.hash;
    if (hash) {
      const anchor = document.querySelector(`a[name="${hash.slice(1)}"]`);
      if (anchor) anchor.scrollIntoView(true);
    }
  }

  render({ children }) {
    return html`
      <div class=${containerStyles}>
        <div class=${contentStyles}>${children}</div>
      </div>
    `;
  }
}

const headingLinkStyles = css`
  & {
    position: absolute;
    bottom: 0;
    top: 0;
    left: -44px;
    font-size: 14px;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity ease-in 0.1s;
  }
`;

const headingStyles = css`
  & {
    position: relative;
  }

  &:hover > .${headingLinkStyles.toString()} {
    opacity: 1;
  }
`;

export class Heading {
  constructor() {
    this.onClick = () => {
      window.location.assign(`#${this.name}`);
    };
  }

  get name() {
    return this.props.children.join("").replace(/\s+/g, "-").toLowerCase();
  }

  render({ children, class: className, level, ...other }) {
    const type = `h${level}`;
    const name = this.name;

    return html`
      <a name=${name} />
      <${type} class=${classes(headingStyles, className)} ...${other}>
        <div class=${headingLinkStyles}>
          <${IconButton} pill basic @click=${this.onClick}>
            <${LinkStroke16Icon} />
          <//>
        </div>
        ${children}
      <//>
    `;
  }
}

const titleStyles = css`
  & {
    margin-bottom: 12px;
    color: rgb(3, 54, 61);
    line-height: 1.08333;
    font-size: 48px;
    font-weight: 700;
  }
`;

export class Title {
  render({ children }) {
    return html`<${Heading} level="1" class=${titleStyles}>${children}<//>`;
  }
}

const subTitleStyles = css`
  & {
    color: rgb(104, 115, 125);
    font-size: 16px;
  }
`;

export class SubTitle {
  render({ children }) {
    return html`<p class=${subTitleStyles}>${children}</p>`;
  }
}

const lineStyles = css`
  & {
    color: rgb(104, 115, 125);
    font-size: 16px;
  }
`;

export class Line {
  render() {
    return html`<hr class=${lineStyles} />`;
  }
}
