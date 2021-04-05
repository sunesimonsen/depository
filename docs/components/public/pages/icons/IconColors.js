import { html } from "@depository/view";
import { css } from "stylewars";

import { Center } from "@depository/components";
import AnswerBot26Icon from "@depository/components/icons/AnswerBot26Icon";

const answerBotStyles = css`
  & {
    fill: rgb(3, 54, 61);
    color: rgb(214, 238, 241);
  }
`;

export default class Example {
  render() {
    return html`
      <${Center}>
        <${AnswerBot26Icon} class=${answerBotStyles} />
      <//>
    `;
  }
}
