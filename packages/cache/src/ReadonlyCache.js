export class ReadonlyCache {
  constructor(cache) {
    this.get = (...args) => cache.get(...args);
    this.has = (...args) => cache.has(...args);
  }
}
