export class Subscription {
  constructor(subscribable, listener) {
    this._subscribable = subscribable;
    this._listener = listener;
  }

  _notify(...args) {
    this._listener(...args);
  }

  unsubscribe() {
    this._subscribable.unsubscribe(this);
  }
}
