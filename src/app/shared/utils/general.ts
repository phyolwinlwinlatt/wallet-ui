export const calculateValueChangedPercent = (
  prevValue: number,
  nextValue: number
): number => {
  const change = ((nextValue - prevValue) / prevValue) * 100;
  return Math.round(+change.toFixed(2));
};

export const calculatePercent = (
  partialValue: number,
  totalValue: number
): number => {
  return (partialValue / totalValue) * 100;
};
