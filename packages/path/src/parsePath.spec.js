import unexpected from "unexpected";
import unexpectedSnapshot from "unexpected-snapshot";
import { parsePath } from "./parsePath.js";

const expect = unexpected.clone().use(unexpectedSnapshot);

expect.output.preferredWidth = 80;

describe("parsePath", () => {
  it("parses valid paths", () => {
    expect(
      parsePath("foo.bar.baz"),
      "to inspect as snapshot",
      expect.unindent`
        {
          _type: 0,
          _data: [
            { _type: 1, _data: 'foo' },
            { _type: 1, _data: 'bar' },
            { _type: 1, _data: 'baz' }
          ]
        }
      `
    );
    expect(
      parsePath("foo.*.baz"),
      "to inspect as snapshot",
      expect.unindent`
        {
          _type: 0,
          _data: [
            { _type: 1, _data: 'foo' },
            { _type: 4, _data: undefined },
            { _type: 1, _data: 'baz' }
          ]
        }
      `
    );
    expect(
      parsePath("foo.{*}.baz"),
      "to inspect as snapshot",
      expect.unindent`
        {
          _type: 0,
          _data: [
            { _type: 1, _data: 'foo' },
            { _type: 5, _data: undefined },
            { _type: 1, _data: 'baz' }
          ]
        }
      `
    );
    expect(
      parsePath("foo.{bar,qux}.baz"),
      "to inspect as snapshot",
      expect.unindent`
        {
          _type: 0,
          _data: [
            { _type: 1, _data: 'foo' },
            { _type: 3, _data: [ 'bar', 'qux' ] },
            { _type: 1, _data: 'baz' }
          ]
        }
      `
    );
    expect(
      parsePath("foo.(bar|qux).baz"),
      "to inspect as snapshot",
      expect.unindent`
        {
          _type: 0,
          _data: [
            { _type: 1, _data: 'foo' },
            { _type: 2, _data: [ 'bar', 'qux' ] },
            { _type: 1, _data: 'baz' }
          ]
        }
      `
    );
    expect(
      parsePath("foo.-_&^%.qux"),
      "to inspect as snapshot",
      expect.unindent`
        {
          _type: 0,
          _data: [
            { _type: 1, _data: 'foo' },
            { _type: 1, _data: '-_&^%' },
            { _type: 1, _data: 'qux' }
          ]
        }
      `
    );
    expect(
      parsePath("foo.{bar}.baz"),
      "to inspect as snapshot",
      expect.unindent`
        {
          _type: 0,
          _data: [
            { _type: 1, _data: 'foo' },
            { _type: 3, _data: [ 'bar' ] },
            { _type: 1, _data: 'baz' }
          ]
        }
      `
    );
    expect(
      parsePath("foo.(bar).baz"),
      "to inspect as snapshot",
      expect.unindent`
        {
          _type: 0,
          _data: [
            { _type: 1, _data: 'foo' },
            { _type: 2, _data: [ 'bar' ] },
            { _type: 1, _data: 'baz' }
          ]
        }
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
