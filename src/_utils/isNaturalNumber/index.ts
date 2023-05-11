const isNaturalNumber = (n: number): boolean => {
  return n >= 0 && Math.floor(n) === n;
};

export default isNaturalNumber;
