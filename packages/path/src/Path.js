let types = 0;
export const pathType = types++;
export const fieldType = types++;
export const alternationType = types++;
export const collectorType = types++;
export const wildcardType = types++;
export const wildcardCollectorType = types++;

export const createSegment = (_type, _data) => ({
  _type,
  _data,
});
