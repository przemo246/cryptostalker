export const formatNumber = (num) => {
  let formattedNum;
  if (Math.abs(num) < 1) {
    formattedNum = Number(num.toFixed(6));
  } else {
    formattedNum = new Intl.NumberFormat("en-US").format(
      Number(num.toFixed(2))
    );
  }
  return formattedNum;
};
