import { useMemo } from "preact/hooks";

let nextId = 1;

export const useInstanceId = () => useMemo(() => nextId++, []);
