import { html } from "@depository/view";
import { css, classes } from "stylewars";

const styles = ({ gap, stretched, columns, alignItems, justifyItems }) => {
  const gridTemplateColumns =
    typeof columns === "number" || columns.match(/^\d+$/)
      ? `repeat(${columns}, 1fr)`
      : columns;

  return css`
    & {
      display: ${stretched ? "grid" : "inline-grid"};
      ${stretched ? "width: 100%;" : ""}
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
    className,
    children,
    ...other
  }) {
    return html`
      <div
        className=${classes(
          styles({ gap, stretched, columns, alignItems, justifyItems }),
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
