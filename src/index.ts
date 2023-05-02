type Boundaries = {
  min: number;
  max: number;
};

const minmax = ({ min, max }: Boundaries): number => {
  return Math.round(min + (max - min) * Math.random());
};

export default minmax;
