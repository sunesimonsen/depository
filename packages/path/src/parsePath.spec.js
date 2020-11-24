import unexpected from "unexpected";
import unexpectedSnapshot from "unexpected-snapshot";
import { parsePath } from "./parsePath";

const expect = unexpected.clone().use(unexpectedSnapshot);

expect.output.preferredWidth = 80;

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
    expect(
      parsePath("foo.{bar}.baz"),
      "to inspect as snapshot",
      expect.unindent`
        Path({
          type: 'path',
          segments: [
            Field({ type: 'field', name: 'foo' }),
            Collector({ type: 'collector', names: [ 'bar' ] }),
            Field({ type: 'field', name: 'baz' })
          ]
        })
      `
    );
    expect(
      parsePath("foo.(bar).baz"),
      "to inspect as snapshot",
      expect.unindent`
        Path({
          type: 'path',
          segments: [
            Field({ type: 'field', name: 'foo' }),
            Alternation({ type: 'alternation', names: [ 'bar' ] }),
            Field({ type: 'field', name: 'baz' })
          ]
        })
      `
    );
  });

  const invalidPaths = [
    "foo.f().qux",
    "foo.fooo).qux",
    "foo.fooo].qux",
    "foo.fooo}.qux",
    "foo.{()}.qux",
    "foo.[].qux",
    "foo...qux",
    "foo.(sdf,dsf).qux",
    "foo.{sdf|dsf}.qux",
  ];

  invalidPaths.forEach((invalidPath) => {
    it(`rejects invalid path: ${invalidPath}`, () => {
      expect(() => parsePath(invalidPath), "to throw");
    });
  });
});
