class Computed {
  constructor({ store, inputs, apply }) {
    this.store = store;
    this.inputs = inputs;
    this.apply = apply;
    this.subscriptions = [];
    this.inputSubscriptions = [];
    this.inputValues = {};
    this.value;
    this.notifyTimer;
  }

  notify() {
    this.subscriptions
      .filter(({ immediate }) => !immediate)
      .forEach((subscription) => {
        const newValue = this.apply(this.inputValues, this.store);
        if (this.value !== newValue) {
          this.value = newValue;
          subscription.listener(this.value, this.store);
        }
      });
  }

  notifyImmediate() {
    this.subscriptions
      .filter(({ immediate }) => immediate)
      .forEach((subscription) => {
        const newValue = this.apply(this.inputValues, this.store);
        if (this.value !== newValue) {
          this.value = newValue;
          subscription.listener(this.value, this.store);
        }
      });
  }

  stateUpdated() {
    this.notifyImmediate();
    clearTimeout(this.notifyTimer);
    this.notifyTimer = setTimeout(() => {
      this.notify();
    }, 0);
  }

  subscribeInputs() {
    this.inputSubscriptions = [];
    this.inputValues = {};

    Object.entries(this.inputs).forEach(([name, input]) => {
      let subscription;

      if (input instanceof Computed) {
        subscription = input.subscribe(
          (value) => {
            if (this.inputValues[name] !== value) {
              this.inputValues[name] = value;
              this.stateUpdated();
            }
          },
          { immediate: true }
        );
        this.inputValues[name] = input.value;
      } else {
        subscription = this.store.subscribe(input, (value) => {
          if (this.inputValues[name] !== value) {
            this.inputValues[name] = value;
            this.stateUpdated();
          }
        });
        this.inputValues[name] = this.store.get(input);
      }

      this.inputSubscriptions.push(subscription);
    });

    this.value = this.apply(this.inputValues, this.store);
  }

  unsubscribeInputs() {
    this.inputSubscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  subscribe(listener, { immediate = false } = {}) {
    if (this.subscriptions.length === 0) {
      this.subscribeInputs();
    }

    const subscription = {
      listener,
      immediate,
      unsubscribe: () => {
        this.subscriptions = this.subscriptions.filter(
          (s) => s != subscription
        );

        if (this.subscriptions.length === 0) {
          this.unsubscribeInputs();
        }
      },
    };

    this.subscriptions.push(subscription);

    return subscription;
  }

  waitFor(predicate) {
    return new Promise((resolve) => {
      const subscription = this.subscribe((value) => {
        if (predicate(value)) {
          subscription.unsubscribe();
          resolve(value);
        }
      });

      if (predicate(this.value)) {
        subscription.unsubscribe();
        resolve(this.value);
      }
    });
  }
}

module.exports = Computed;
