const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"));

expect.output.preferredWidth = 80;

const parsePath = require("./parsePath");

describe("parsePath", () => {
  it("parses valid paths", () => {
    expect(
      parsePath("foo.bar.baz"),
      "to inspect as snapshot",
      expect.unindent`
        Path({
          type: 'path',
          segments: [
            Field({ type: 'field', name: 'foo' }),
            Field({ type: 'field', name: 'bar' }),
            Field({ type: 'field', name: 'baz' })
          ]
        })
      `
    );
    expect(
      parsePath("foo.*.baz"),
      "to inspect as snapshot",
      expect.unindent`
        Path({
          type: 'path',
          segments: [
            Field({ type: 'field', name: 'foo' }),
            Wildcard({ type: 'wildcard' }),
            Field({ type: 'field', name: 'baz' })
          ]
        })
      `
    );
    expect(
      parsePath("foo.{*}.baz"),
      "to inspect as snapshot",
      expect.unindent`
        Path({
          type: 'path',
          segments: [
            Field({ type: 'field', name: 'foo' }),
            WildcardCollector({ type: 'wildcardCollector' }),
            Field({ type: 'field', name: 'baz' })
          ]
        })
      `
    );
    expect(
      parsePath("foo.{bar,qux}.baz"),
      "to inspect as snapshot",
      expect.unindent`
        Path({
          type: 'path',
          segments: [
            Field({ type: 'field', name: 'foo' }),
            Collector({ type: 'collector', names: [ 'bar', 'qux' ] }),
            Field({ type: 'field', name: 'baz' })
          ]
        })
      `
    );
    expect(
      parsePath("foo.(bar|qux).baz"),
      "to inspect as snapshot",
      expect.unindent`
        Path({
          type: 'path',
          segments: [
            Field({ type: 'field', name: 'foo' }),
            Alternation({ type: 'alternation', names: [ 'bar', 'qux' ] }),
            Field({ type: 'field', name: 'baz' })
          ]
        })
      `
    );
    expect(
      parsePath("foo.-_&^%.qux"),
      "to inspect as snapshot",
      expect.unindent`
        Path({
          type: 'path',
          segments: [
            Field({ type: 'field', name: 'foo' }),
            Field({ type: 'field', name: '-_&^%' }),
            Field({ type: 'field', name: 'qux' })
          ]
        })
      `
    );
  });

  it("rejects invalid paths", () => {
    const invalidPaths = [
      "foo.f().qux",
      "foo.fooo).qux",
      "foo.fooo].qux",
      "foo.fooo}.qux",
      "foo.{fooo}.qux",
      "foo.{()}.qux",
      "foo.[].qux",
      "foo...qux",
      "foo.(sdf,dsf).qux",
      "foo.{sdf|dsf}.qux",
    ];

    invalidPaths.forEach((path) => {
      expect(() => parsePath(path), "to throw");
    });
  });
});
