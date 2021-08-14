export const formatNumber = (num) => {
  if (Math.abs(num) < 1) {
    return Number(num.toFixed(6));
  } else {
    return new Intl.NumberFormat("en-US").format(Number(num.toFixed(2)));
  }
};
