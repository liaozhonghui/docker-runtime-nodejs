/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = new Array(2);
  dp[0] = 0;
  dp[1] = -prices[0];
  for (let i = 0; i < prices.length; i++) {
    dp[0] = Math.max(dp[0], dp[1] + prices[i]);
    dp[1] = Math.max(dp[1], -prices[i]);
  }
  return dp[0];
};
// @lc code=end

