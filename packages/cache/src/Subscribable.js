import { Subscription } from "./Subscription.js";

export class Subscribable {
  constructor() {
    this.subscriptions = [];
    this.dependents = [];
    this.notifyTimer = null;
  }

  _addDependent(dependent) {
    if (this.subscriptions.length === 0 && this.dependents.length === 0) {
      this._onActivate();
    }

    this.dependents.push(dependent);
  }

  _removeDependent(dependent) {
    this.dependents = this.dependents.filter((d) => d !== dependent);

    if (this.subscriptions.length === 0 && this.dependents.length === 0) {
      this._onDeactivate();
    }
  }

  _onActivate() {}
  _onDeactivate() {}

  subscribe(listener) {
    if (this.subscriptions.length === 0 && this.dependents.length === 0) {
      this._onActivate();
    }

    const subscription = new Subscription({
      subscribable: this,
      listener,
    });

    this.subscriptions.push(subscription);

    return subscription;
  }

  unsubscribe(subscription) {
    this.subscriptions = this.subscriptions.filter((s) => s !== subscription);

    if (this.subscriptions.length === 0 && this.dependents.length === 0) {
      this._onDeactivate();
    }
  }

  notify(...args) {
    this.subscriptions.forEach((subscription) => {
      subscription.notify(...args);
    });
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
