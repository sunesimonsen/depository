import { Subscribable } from "./Subscribable.js";

const notInstantiated = {};

export class Computed extends Subscribable {
  constructor({ cache, id, compute, inputs, inputObservables, isEqual }) {
    super();
    this.id = id;
    this.cache = cache;
    this.compute = compute;
    this.inputs = inputs;
    this.inputObservables = inputObservables;
    this.inputValues = [];
    this.isEqual = isEqual;
    this.isDirty = true;
    this.value = notInstantiated;
    this.updateValue();
  }

  updateValue() {
    this.isDirty = this.value === notInstantiated;
    this.inputValues = {};
    Object.entries(this.inputObservables).forEach(([name, observer]) => {
      this.inputValues[name] = observer.value;
      this.isDirty = this.isDirty || observer.isDirty;
    });

    if (this.isDirty) {
      const previousValue = this.value;
      this.value = this.compute(this.inputValues, this.cache);
      this.isDirty =
        previousValue === notInstantiated ||
        !this.isEqual(previousValue, this.value);
    }
  }

  _onActivate() {
    Object.values(this.inputObservables).forEach((input) =>
      input._addDependent(this)
    );
    this.cache.addObserver(this);
  }

  _onDeactivate() {
    Object.values(this.inputObservables).forEach((input) =>
      input._removeDependent(this)
    );
    this.cache.removeObserver(this);
  }
}
