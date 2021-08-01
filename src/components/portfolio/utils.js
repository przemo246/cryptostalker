export const formatNumber = (num) => {
  let formattedNum;
  if (num.toString().startsWith("0.")) {
    formattedNum = Number(num);
  } else {
    formattedNum = Number(num.toFixed(2));
  }
  return new Intl.NumberFormat("en-US").format(formattedNum);
};
