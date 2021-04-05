import { html } from "@depository/view";
import { css, classes } from "stylewars";

const styles = ({ gap, columns, alignItems, justifyItems }) => {
  const gridTemplateColumns =
    typeof columns === "number" || columns.match(/^\d+$/)
      ? `repeat(${columns}, 1fr)`
      : columns;

  return css`
    & {
      display: grid;
      gap: ${gap};
      align-items: ${alignItems};
      justify-items: ${justifyItems};
      grid-template-columns: ${gridTemplateColumns};
    }
  `;
};

const stretchedStyles = css`
  & {
    width: 100%;
  }
`;

export class ColumnLayout {
  render({
    gap = "1em",
    columns = 1,
    stretched,
    alignItems = "center",
    justifyItems = "center",
    class: className,
    children,
    ...other
  }) {
    return html`
      <div
        class=${classes(
          styles({ gap, columns, alignItems, justifyItems }),
          stretched && stretchedStyles,
          className
        )}
        ...${other}
      >
        ${children}
      </div>
    `;
  }
}
