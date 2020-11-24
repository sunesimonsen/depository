import { updateIn } from "./updateIn.js";

export const setIn = (data, path, value) => updateIn(data, path, (_) => value);
