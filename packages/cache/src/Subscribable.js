import { Subscription } from "./Subscription.js";

export class Subscribable {
  constructor() {
    this._subscriptions = [];
    this._dependents = [];
  }

  _addDependent(dependent) {
    if (this._subscriptions.length === 0 && this._dependents.length === 0) {
      this._onActivate();
    }

    this._dependents.push(dependent);
  }

  _removeDependent(dependent) {
    this._dependents = this._dependents.filter((d) => d !== dependent);

    if (this._subscriptions.length === 0 && this._dependents.length === 0) {
      this._onDeactivate();
    }
  }

  _onActivate() {}
  _onDeactivate() {}

  subscribe(listener) {
    if (this._subscriptions.length === 0 && this._dependents.length === 0) {
      this._onActivate();
    }

    const subscription = new Subscription(this, listener);

    this._subscriptions.push(subscription);

    return subscription;
  }

  unsubscribe(subscription) {
    this._subscriptions = this._subscriptions.filter((s) => s !== subscription);

    if (this._subscriptions.length === 0 && this._dependents.length === 0) {
      this._onDeactivate();
    }
  }

  _notify(...args) {
    this._subscriptions.forEach((subscription) => {
      subscription._notify(...args);
    });
  }
}
