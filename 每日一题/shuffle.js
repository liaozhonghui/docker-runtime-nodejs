/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.position = nums.map((v, k) => k);
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.position = this.nums.map((v, k) => k);
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  // TODO: shuffle algo.
  for (let i = 0; i < this.position.length; i++) {
    let size = this.nums.length - 1 - i;
    const pos = Math.floor(Math.random() * size);
    [this.position[size], this.position[pos]] = [this.position[pos], this.position[size]];
  }
  console.log('shuffle position:', this.position);
  const res = this.position.map(k => this.nums[k]);
  return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

let solution = new Solution([1, 2, 3]);
let res1 = solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
let res2 = solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
let res3 = solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
console.log('res1:', res1);
console.log('res2:', res2);
console.log('res3:', res3);
