import { updateIn } from "./updateIn";

export const setIn = (data, path, value) => updateIn(data, path, (_) => value);
