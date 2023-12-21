/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; --i) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;
  }
  return Array.from(new Array(digits.length + 1), (_v, k) => k == 0 ? 1 : 0);
};
// @lc code=end

