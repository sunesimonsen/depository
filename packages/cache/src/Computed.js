import { Subscribable } from "./Subscribable";

export class Computed extends Subscribable {
  constructor({ cache, id, compute, inputs, inputObservables }) {
    super();
    this.id = id;
    this.cache = cache;
    this.compute = compute;
    this.inputs = inputs;
    this.inputObservables = inputObservables;
    this.inputValues = [];
    this.isDirty = true;
    this.value = {}; // unique
    this.updateValue();
  }

  updateValue() {
    this.inputValues = {};
    Object.entries(this.inputObservables).forEach(([name, observer]) => {
      this.inputValues[name] = observer.value;
      this.isDirty = this.isDirty || observer.isDirty;
    });

    if (this.isDirty) {
      const previousValue = this.value;
      this.value = this.compute(this.inputValues, this.cache);
      this.isDirty = this.value !== previousValue;
    }
  }

  onActivate() {
    Object.values(this.inputObservables).forEach((input) =>
      input.addDependent(this)
    );
    this.cache.addObserver(this);
  }

  onDeactivate() {
    Object.values(this.inputObservables).forEach((input) =>
      input.removeDependent(this)
    );
    this.cache.removeObserver(this);
  }
}
