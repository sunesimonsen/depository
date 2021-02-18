import { Computed } from "./Computed.js";
import { PathObserver } from "./PathObserver.js";
import { shallowEqual } from "./equality.js";

import {
  getIn,
  contains,
  isPathsEqual,
  isPathsIntersecting,
  isPathObject,
  parsePath,
  updateIn,
} from "@depository/path";

let observableIds = 0;

const isObject = (value) => value && typeof value === "object";

const isComputedDefinition = (definition) => {
  if (!isObject(definition)) return false;

  const { inputs, compute } = definition;

  if (typeof compute !== "function") {
    return false;
  }

  if (!isObject(inputs)) {
    return false;
  }

  return true;
};

const identity = (v) => v;

export class Cache {
  constructor(data = {}) {
    this._data = data;
    this._pathObservers = new Set();
    this._computedObservers = new Set();

    this._setData = this._setData.bind(this);
  }

  _addObserver(observer) {
    if (observer instanceof Computed) {
      this._computedObservers.add(observer);
    } else {
      this._pathObservers.add(observer);
    }
  }

  _removeObserver(observer) {
    if (observer instanceof Computed) {
      this._computedObservers.delete(observer);
    } else {
      this._pathObservers.delete(observer);
    }
  }

  _setData(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

  get(pathOrComputed) {
    if (isComputedDefinition(pathOrComputed)) {
      const { inputs, compute } = pathOrComputed;

      const inputValues = {};
      Object.entries(inputs).forEach(([key, value]) => {
        inputValues[key] = this.get(value);
      });

      return compute(inputValues);
    } else if (isObject(pathOrComputed) && !isPathObject(pathOrComputed)) {
      return this.get({
        inputs: pathOrComputed,
        compute: identity,
      });
    } else {
      return getIn(this.data, pathOrComputed);
    }
  }

  has(path) {
    return contains(this.data, path);
  }

  set(...args) {
    let path, value;

    if (args.length === 1) {
      value = args[0];
    } else {
      path = args[0];
      value = args[1];
    }

    this.update(path, () => value);

    return this;
  }

  update(...args) {
    let apply, path, defaultValue;

    if (args.length === 1) {
      apply = args[0];
    } else {
      path = args[0];
      apply = args[1];
      defaultValue = args[2];
    }

    this._setData(
      updateIn(this.data, path, (value) => apply(value, this), defaultValue)
    );
    this._pathObservers.forEach((pathObserver) => {
      if (
        !pathObserver._isDirty &&
        isPathsIntersecting(pathObserver._path, path)
      ) {
        pathObserver._isDirty = true;
      }
    });

    return this;
  }

  remove(path) {
    return this.set(path, undefined);
  }

  notify() {
    const _computedObservers = Array.from(this._computedObservers).sort(
      (a, b) => a._id - b._id
    );

    const updateValue = (observer) => observer._updateValue();
    const isDirty = (observer) => observer._isDirty;

    const dirtyPathObservers = Array.from(this._pathObservers).filter(isDirty);

    dirtyPathObservers.forEach(updateValue);
    _computedObservers.forEach(updateValue);

    const dirtyComputedObservers = _computedObservers.filter(isDirty);

    const dirtyObservers = [...dirtyPathObservers, ...dirtyComputedObservers];

    dirtyObservers.forEach((observer) => {
      observer._isDirty = false;
      observer._notify(observer.value);
    });
  }

  observe(pathOrComputed) {
    let observer;
    if (isComputedDefinition(pathOrComputed)) {
      const { inputs, compute, isEqual = shallowEqual } = pathOrComputed;

      observer = Array.from(this._computedObservers).find(
        (o) =>
          o._compute === compute &&
          o._inputs === inputs &&
          o._isEqual === isEqual
      );

      if (observer) return observer;

      const inputObservables = {};

      Object.entries(inputs).forEach(([key, value]) => {
        inputObservables[key] = this.observe(value);
      });

      return new Computed(
        this,
        observableIds++,
        compute,
        inputs,
        inputObservables,
        isEqual
      );
    } else if (isObject(pathOrComputed) && !isPathObject(pathOrComputed)) {
      return this.observe({
        inputs: pathOrComputed,
        compute: identity,
      });
    } else {
      const path = parsePath(pathOrComputed);
      const _pathObservers = Array.from(this._pathObservers);
      observer = _pathObservers.find((o) => isPathsEqual(o._path, path));
      if (observer) return observer;

      return new PathObserver(this, path);
    }
  }
}
