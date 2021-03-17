const id = "stylewars";
function getStyleElement() {
  let styleElement = document.getElementById(id);

  if (styleElement) return styleElement;

  styleElement = document.createElement("style");
  styleElement.setAttribute("type", "text/css");
  styleElement.setAttribute("id", id);
  styleElement.hashes = new Map();
  styleElement.positions = new Map();
  styleElement.counter = 1;
  document.head.appendChild(styleElement);

  return styleElement;
}

// Inspired by https://github.com/substack/insert-css

function insertCss(css) {
  const styleElement = getStyleElement();

  // strip potential UTF-8 BOM if css was read from a file
  if (css.charCodeAt(0) === 0xfeff) {
    css = css.substr(1, css.length);
  }

  // actually add the stylesheet
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText += css;
  } else {
    styleElement.textContent += css;
  }

  return styleElement;
}

function stringToHash(string) {
  var hash = 0;

  let i = string.length;
  while (i) {
    const char = string.charCodeAt(--i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash;
}

const getHashes = () => getStyleElement().hashes;
const getPositions = () => getStyleElement().positions;

const pairs = {
  '"': '"',
  "'": "'",
  "{": "}",
};

class CSSTemplate {
  constructor(content, hash = stringToHash(content)) {
    this._content = content;
    this._hash = hash;
    this._rendered = null;

    const hashes = getHashes();

    while (hashes.has(this._hash) && hashes.get(this._hash) !== content) {
      this._hash++;
    }

    if (!hashes.has(this._hash)) {
      hashes.set(this._hash, content);
    }

    const hashString = Math.abs(this._hash).toString(16);
    this._hashString = hashString.match(/^[0-9]/)
      ? `c${hashString}`
      : hashString;
  }

  render() {
    if (typeof this._rendered === "string") {
      return this._rendered;
    }

    let result = "";
    let close = null;
    const tokens = this._content.split(/([:;{}&]|\\?["']|\\)/g).filter(Boolean);

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (close) {
        if (token.match(close)) {
          close = null;
        }
        result += token;
        continue;
      }

      close = pairs[token];

      if (close) {
        result += token;
      } else if (token === "&") {
        result += `.${this._hashString}`;
      } else {
        result += token;
      }
    }

    this._rendered = result;
    return this._rendered;
  }

  combine(template) {
    const content = this._content + " " + template._content;
    const hash = (629 + this._hash) * 37 + template._hash;
    return new CSSTemplate(content, hash);
  }

  toString() {
    return classes(this);
  }
}

const hasDocument = () => typeof document !== "undefined";

const appendCSSToDocument = (template) => {
  if (!hasDocument()) return;

  const positions = getPositions();

  if (!positions.has(template._hash)) {
    insertCss(template.render());
    positions.set(template._hash, getStyleElement().counter++);
  }
};

const css = (strings, ...values) => {
  let template = strings[0];

  for (var i = 0; i < values.length; i++) {
    template += String(values[i]);
    template += strings[i + 1];
  }

  return new CSSTemplate(template.replace(/\s*\n+\s*/g, ""));
};

const getPosition = (template) => {
  const positions = getPositions();

  return positions.get(template._hash);
};

const correctlyOrdered = (positions) => {
  if (!hasDocument()) return false;

  let last = positions[0];

  for (let i = 1; i < positions.length; i++) {
    const n = positions[i];

    if (!last && n) return false;
    if (n < last) return false;

    last = n;
  }
  return true;
};

const classes = (...args) => {
  const values = Array.from(args).filter(Boolean);

  const classNames = values.filter((v) => typeof v === "string");

  const templates = values.filter((v) => v instanceof CSSTemplate);

  const positions = templates.map(getPosition);

  if (correctlyOrdered(positions)) {
    templates.forEach((template, i) => {
      if (!positions[i]) {
        appendCSSToDocument(template);
      }

      classNames.push(template._hashString);
    });
  } else {
    const template = templates.reduce((combined, template) =>
      combined.combine(template)
    );

    if (!getPosition(template)) {
      appendCSSToDocument(template);
    }

    classNames.push(template._hashString);
  }

  return classNames.join(" ");
};

export { classes, css };
