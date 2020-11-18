class Subscription {
  constructor({ listener, subscribable }) {
    this.subscribable = subscribable;
    this.listener = listener;
  }

  notify(...args) {
    this.listener(...args);
  }

  unsubscribe() {
    this.subscribable.unsubscribe(this);
  }
}

module.exports = Subscription;
