const loadScript = (src) =>
  new Promise((resolve, reject) => {
    const head = document.head;
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.src = src;

    script.onerror = function () {
      reject(new Error("Could not load script: " + src));
    };

    script.onload = function () {
      resolve(script);
    };

    head.appendChild(script);
  });

export class ScriptLoader {
  async didMount() {
    if (!this.injected) {
      for (const src of this.props.sources) {
        await loadScript(src);
      }

      this.injected = true;
    }
  }

  render() {
    return null;
  }
}
