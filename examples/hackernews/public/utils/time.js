const relativeTimeFormat = new Intl.RelativeTimeFormat();

export const formatRelativeHours = (timestamp) => {
  const seconds = timestamp - Date.now() / 1000;
  const hours = seconds / 60 / 60;
  return relativeTimeFormat.format(Math.round(hours), "hours");
};
