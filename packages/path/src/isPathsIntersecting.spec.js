import expect from "unexpected";
import { isPathsIntersecting } from "./isPathsIntersecting.js";

describe("isPathsIntersecting", () => {
  [
    ["foo.bar.baz", "foo.bar.baz", true],
    ["foo.bar.baz", "foo.bar", true],
    ["foo.bar", "foo.bar.baz", true],

    ["foo.*.baz", "foo.bar.baz", true],
    ["foo.bar.baz", "foo.*.baz", true],
    ["foo.*.baz", "foo.*.baz", true],

    ["foo.{*}.baz", "foo.bar.baz", true],
    ["foo.bar.baz", "foo.{*}.baz", true],
    ["foo.{*}.baz", "foo.{*}.baz", true],

    ["foo.{bar,qux}.baz", "foo.bar.baz", true],
    ["foo.bar.baz", "foo.{bar,qux}.baz", true],
    ["foo.{bar,qux}.baz", "foo.{bar,qux}.baz", true],

    ["foo.(bar|qux).baz", "foo.bar.baz", true],
    ["foo.bar.baz", "foo.(bar|qux).baz", true],
    ["foo.(bar|qux).baz", "foo.(bar|qux).baz", true],

    // no intersection
    ["foo.bar.baz", "foo.bar.qux", false],
    ["foo.bar.baz", "foo.baz", false],
    ["foo.baz", "foo.bar.baz", false],

    ["foo.*.baz", "foo.bar.qux", false],
    ["foo.bar.qux", "foo.*.baz", false],
    ["foo.*.qux", "foo.*.baz", false],

    ["foo.{*}.baz", "foo.bar.qux", false],
    ["foo.bar.qux", "foo.{*}.baz", false],
    ["foo.{*}.qux", "foo.{*}.baz", false],

    ["foo.{bar,qux}.baz", "foo.bar.qux", false],
    ["foo.bar.baz", "foo.{bar,qux}.qux", false],
    ["foo.quux.baz", "foo.{bar,qux}.baz", false],
    ["foo.{bar,qux}.baz", "foo.{bar,qux}.qux", false],
    ["foo.{quux,quuuux}.baz", "foo.{bar,qux}.baz", false],

    ["foo.(bar|qux).baz", "foo.bar.qux", false],
    ["foo.bar.baz", "foo.(bar|qux).qux", false],
    ["foo.quux.baz", "foo.(bar|qux).baz", false],
    ["foo.(bar|qux).baz", "foo.(bar|qux).qux", false],
    ["foo.(quux|quuuux).baz", "foo.(bar|qux).baz", false],
  ].forEach(([a, b, expected]) => {
    it(`${a} isPathsIntersecting with ${b} : ${expected}`, () => {
      expect(isPathsIntersecting(a, b), "to be", expected);
    });
  });
});
