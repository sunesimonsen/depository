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
        console.log(this.inputValues);
        this.value = this.apply(this.inputValues, this.store);
        subscription.listener(this.value, this.store);
      });
  }

  notifyImmediate() {
    this.subscriptions
      .filter(({ immediate }) => immediate)
      .forEach((subscription) => {
        console.log(this.inputValues);
        this.value = this.apply(this.inputValues, this.store);
        subscription.listener(this.value, this.store);
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
            this.inputValues[name] = value;
            this.stateUpdated();
          },
          { immediate: true }
        );
        this.inputValues[name] = input.value;
      } else {
        subscription = this.store.subscribe(input, (value) => {
          this.inputValues[name] = value;
          this.stateUpdated();
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
}

module.exports = Computed;
