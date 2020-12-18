export const classes = (...classes) =>
  Array.from(classes).filter(Boolean).join(" ");
