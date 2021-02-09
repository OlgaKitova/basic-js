const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
     throw new Error();
  }
  let arr2 = [];
  const intermediate = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] == '--discard-next') {
      intermediate.push(++i);
    } else if (arr[i] == '--discard-prev') {
      if (arr2.length > 0 && !intermediate.some((x) => x === i - 1)) {
        arr2 = arr2.slice(0, arr2.length - 1);
        intermediate.push(i - 1);
      }
    } else if (arr[i] == '--double-next') {
      if (++i < arr.length) {
       arr2.push(arr[i]);
        arr2.push(arr[i]);
      }
    } else if (arr[i] == '--double-prev') {
      if (i > 0 && !intermediate.some((x) => x === i - 1))
        arr2.push(arr[i - 1]);
    } else {
      arr2.push(arr[i]);
    }
  }
  return arr2;
};
