const Computed = require("./Computed");
const PathObserver = require("./PathObserver");

const {
  getIn,
  isPathsEqual,
  isPathsIntersecting,
  parsePath,
  updateIn,
} = require("@depository/path");

let observableIds = 0;

const isObject = (value) => value && typeof value === "object";

const isComputedDefinition = (definition) => {
  if (!isObject(definition)) return false;

  const { inputs, apply } = definition;

  if (typeof apply !== "function") {
    return false;
  }

  if (!isObject(inputs)) {
    return false;
  }

  return true;
};

class Cache {
  constructor(data = {}) {
    this._data = data;
    this.pathObservers = new Set();
    this.computedObservers = new Set();
  }

  addObserver(observer) {
    if (observer instanceof Computed) {
      this.computedObservers.add(observer);
    } else {
      this.pathObservers.add(observer);
    }
  }

  removeObserver(observer) {
    if (observer instanceof Computed) {
      this.computedObservers.delete(observer);
    } else {
      this.pathObservers.delete(observer);
    }
  }

  _setData = (data) => {
    this._data = data;
  };

  get data() {
    return this._data;
  }

  get(pathOrComputed) {
    if (isComputedDefinition(pathOrComputed)) {
      const { inputs, apply } = pathOrComputed;

      const inputValues = {};
      Object.entries(inputs).forEach(([key, value]) => {
        inputValues[key] = this.get(value);
      });

      return apply(inputValues);
    } else {
      return getIn(this.data, pathOrComputed);
    }
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
    let apply, path;

    if (args.length === 1) {
      apply = args[0];
    } else {
      path = args[0];
      apply = args[1];
    }

    this._setData(updateIn(this.data, path, (value) => apply(value, this)));
    this.pathObservers.forEach((pathObserver) => {
      if (
        !pathObserver.isDirty &&
        isPathsIntersecting(pathObserver.path, path)
      ) {
        pathObserver.isDirty = true;
      }
    });

    return this;
  }

  notify() {
    const computedObservers = Array.from(this.computedObservers).sort(
      (a, b) => a.id < b.id
    );

    const updateValue = (observer) => observer.updateValue();
    const isDirty = (observer) => observer.isDirty;

    const dirtyPathObservers = Array.from(this.pathObservers).filter(isDirty);

    dirtyPathObservers.forEach(updateValue);
    computedObservers.forEach(updateValue);

    const dirtyComputedObservers = computedObservers.filter(isDirty);

    const dirtyObservers = [...dirtyPathObservers, ...dirtyComputedObservers];

    dirtyObservers.forEach((observer) => {
      observer.isDirty = false;
      observer.notify(observer.value);
    });
  }

  observe(pathOrComputed) {
    let observer;
    if (isComputedDefinition(pathOrComputed)) {
      const { inputs, apply } = pathOrComputed;
      observer = Array.from(this.computedObservers).find(
        (o) => o.apply === apply && o.inputs === inputs
      );
      if (observer) return observer;

      const inputObservables = {};

      Object.entries(inputs).forEach(([key, value]) => {
        inputObservables[key] = this.observe(value);
      });

      return new Computed({
        cache: this,
        id: observableIds++,
        inputs,
        inputObservables,
        apply,
      });
    } else {
      const path = parsePath(pathOrComputed);
      const pathObservers = Array.from(this.pathObservers);
      observer = pathObservers.find((o) => isPathsEqual(o.path, path));
      if (observer) return observer;

      return new PathObserver({ cache: this, path });
    }
  }
}

module.exports = Cache;
