import fc from "fast-check";
import minmax from ".";

test("The random value should be comprised between min and max boundaries", () => {
  fc.assert(
    fc.property(fc.record({ min: fc.nat(), max: fc.nat() }), ({ min, max }) => {
      fc.pre(min <= max);
      const result = minmax({ min, max });
      return min <= result && result <= max;
    })
  );
});

test("The random value should be a natural number", () => {
  fc.assert(
    fc.property(fc.record({ min: fc.nat(), max: fc.nat() }), ({ min, max }) => {
      fc.pre(min <= max);
      const result = minmax({ min, max });
      return result >= 0 && Math.floor(result) === result;
    })
  );
});
