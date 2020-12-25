import { html } from "@depository/view";
import { css } from "stylewars";

const styles = css`
  & {
    display: inline-block;
    position: relative;
    border-radius: 4px;
    width: 100%;
    height: 0.6em;
    overflow: hidden;
    line-height: 0.6;
    background-color: rgba(47, 57, 65, 0.1);
  }
`;

export class Skeleton {
  render() {
    const width = `${Math.random() * 100 + 500}px`;
    return html` <div class=${styles} style=${{ width }} /> `;
  }
}
