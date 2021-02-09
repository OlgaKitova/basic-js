const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, level = 0) {
     if (!Array.isArray(arr)) {
      return level;
    } else if (arr.length === 0) {
      return level + 1;
    } else {
      const total = [];
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const inlyLevel = this.calculateDepth(element, level + 1);
        total.push(inlyLevel);
      }
      return Math.max(...total);
    }
}
} 