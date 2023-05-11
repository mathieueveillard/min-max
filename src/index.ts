import isNaturalNumber from "_utils/isNaturalNumber";

type Boundaries = {
  min: number;
  max: number;
};

type RandomGenerator = () => number;

const random =
  (generator: RandomGenerator) =>
  ({ min, max }: Boundaries): number => {
    if (!isNaturalNumber(min) || !isNaturalNumber(max)) {
      throw Error("min and max are expected to be natural numbers");
    }
    if (min > max) {
      throw Error("min > max");
    }
    if (min < 0) {
      throw Error("min < 0");
    }
    return Math.round(min + (max - min) * generator());
  };

export default random;
