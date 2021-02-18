import { Subscribable } from "./Subscribable.js";

export class PathObserver extends Subscribable {
  constructor(cache, path) {
    super();
    this._path = path;
    this._cache = cache;
    this._isDirty = false;
    this.value = cache.get(path);
  }

  _updateValue() {
    this.value = this._cache.get(this._path);
  }

  _onActivate() {
    this._cache._addObserver(this);
  }

  _onDeactivate() {
    this._cache._removeObserver(this);
  }
}
