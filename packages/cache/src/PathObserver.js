import { Subscribable } from "./Subscribable.js";

export class PathObserver extends Subscribable {
  constructor({ cache, path }) {
    super();
    this.path = path;
    this.cache = cache;
    this.isDirty = false;
    this.value = cache.get(path);
  }

  updateValue() {
    this.value = this.cache.get(this.path);
  }

  _onActivate() {
    this.cache.addObserver(this);
  }

  _onDeactivate() {
    this.cache.removeObserver(this);
  }
}
