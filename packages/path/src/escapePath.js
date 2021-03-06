const mapping = {
  "&": "&0",
  ".": "&1",
  "{": "&2",
  "}": "&3",
  "(": "&4",
  ")": "&5",
};

export const escapePath = (text) =>
  String(text).replace(/[{}().]/g, ($0) => mapping[$0]);
