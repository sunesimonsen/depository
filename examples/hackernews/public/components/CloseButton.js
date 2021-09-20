import { html } from "@depository/view";
import { css } from "stylewars";

const styles = css`
  & {
    position: fixed;
    top: 50px;
    right: 20px;
    border: none;
    font-size: 30px;
    color: #9a9a86;
    cursor: pointer;
    outline: none;
    background: none;
  }

  &:hover {
    color: black;
  }
`;

export class CloseButton {
  render(props) {
    return html` <button className=${styles} ...${props}>X</button> `;
  }
}
