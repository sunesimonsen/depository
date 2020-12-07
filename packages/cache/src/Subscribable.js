import { Subscription } from "./Subscription";

export class Subscribable {
  constructor() {
    this.subscriptions = [];
    this.dependents = [];
    this.notifyTimer = null;
  }

  addDependent(dependent) {
    if (this.subscriptions.length === 0 && this.dependents.length === 0) {
      this.onActivate();
    }

    this.dependents.push(dependent);
  }

  removeDependent(dependent) {
    this.dependents = this.dependents.filter((d) => d !== dependent);

    if (this.subscriptions.length === 0 && this.dependents.length === 0) {
      this.onDeactivate();
    }
  }

  onActivate() {}
  onDeactivate() {}

  subscribe(listener) {
    if (this.subscriptions.length === 0 && this.dependents.length === 0) {
      this.onActivate();
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
      this.onDeactivate();
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
