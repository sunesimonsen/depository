import { Subscribable } from "./Subscribable.js";

export class Computed extends Subscribable {
  constructor(cache, id, compute, inputs, inputObservables, isEqual) {
    super();
    this._id = id;
    this._cache = cache;
    this._compute = compute;
    this._inputs = inputs;
    this._inputObservables = inputObservables;
    this._inputValues = [];
    this._isEqual = isEqual;
    this._isDirty = true;
    this._updateValue(true);
  }

  _updateValue(force = false) {
    this._inputValues = {};
    Object.entries(this._inputObservables).forEach(([name, observer]) => {
      this._inputValues[name] = observer.value;
      this._isDirty = this._isDirty || observer._isDirty;
    });

    if (force || this._isDirty) {
      const previousValue = this.value;
      this.value = this._compute(this._inputValues, this._cache);
      this._isDirty = !this._isEqual(previousValue, this.value);
    }
  }

  _onActivate() {
    Object.values(this._inputObservables).forEach((input) =>
      input._addDependent(this)
    );
    this._cache._addObserver(this);
    this._updateValue(true);
  }

  _onDeactivate() {
    Object.values(this._inputObservables).forEach((input) =>
      input._removeDependent(this)
    );
    this._cache._removeObserver(this);
  }
}
