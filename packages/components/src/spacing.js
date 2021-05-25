import { css } from "stylewars";

const marginInline = (size, direction) => css`
  & {
    margin-inline-${direction}: ${size};
  }
`;

export const ms1 = marginInline("4px", "start");
export const ms2 = marginInline("8px", "start");
export const ms3 = marginInline("12px", "start");
export const ms4 = marginInline("20px", "start");
export const ms5 = marginInline("32px", "start");

export const me1 = marginInline("4px", "end");
export const me2 = marginInline("8px", "end");
export const me3 = marginInline("12px", "end");
export const me4 = marginInline("20px", "end");
export const me5 = marginInline("32px", "end");
