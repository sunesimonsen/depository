import { pathType } from "./Path.js";

export const isPathObject = (path) => path && path._type === pathType;
