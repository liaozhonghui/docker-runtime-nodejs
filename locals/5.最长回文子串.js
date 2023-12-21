/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = s[0];
  for (let i = 1; i < s.length; i++) {
    // judge s is para;
    let c = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (s[j] == c) {
        while ()
      }
    }
  }
};
// @lc code=end

