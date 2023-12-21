const assert = require('assert');

/**
 * 查询等于指定值的pos
 */
function bsearch(a, n, target) {
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (a[mid] < target) {
      left = mid + 1;
    } else if (a[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

/**
 * 查询第一个等于指定值的pos
 */
function bsearch1(a, n, target) {
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (a[mid] < target) {
      left = mid + 1;
    } else if (a[mid] > target) {
      right = mid - 1;
    } else {
      if (mid == 0 || a[mid - 1] != a[mid]) return mid;
      else right = mid - 1;
    }
  }
  return -1;
}

/**
 * 查询最后一个等于指定值的pos
 */
function bsearch2(a, n, target) {
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (a[mid] < target) {
      left = mid + 1;
    } else if (a[mid] > target) {
      right = mid - 1;
    } else {
      if ((mid == n - 1) || a[mid + 1] != a[mid]) return mid;
      else left = mid + 1;
    }
  }
  return -1;
}
/**
 * 查询第一个大于等于指定值的位置
 */
function bsearch3(a, n, target) {
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (a[mid] >= target) {
      if (mid == 0 || a[mid - 1] < a[mid]) return mid;
      else right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
/**
 * 查询第一个小于等于指定值的位置
 */
function bsearch4(a, n, target) {
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (a[mid] <= target) {
      if (mid == n - 1 || a[mid + 1] > a[mid]) return mid;
      else left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
/**
 * test cases.
 * 1
 */
var a = [1, 1, 2, 3, 5, 8, 13, 21, 34];
var res = bsearch(a, a.length, 1);
assert.equal(res, 1);

/**
 * test cases
 * res: 0
 */
var a = [1, 1, 2, 3, 5, 8, 13, 21, 34];
var res = bsearch1(a, a.length, 1);
assert.equal(res, 0);

/**
 * test cases
 * res: 1
 */
var a = [1, 1, 2, 3, 5, 8, 13, 21, 34];
var res = bsearch2(a, a.length, 1);
assert.equal(res, 1);

/**
 * test cases
 * res: 5
 */
var a = [1, 1, 2, 3, 5, 8, 13, 21, 34];
var res = bsearch3(a, a.length, 10);
assert.equal(res, 6);


/**
 * test cases
 * res: 4
 */
var a = [1, 1, 2, 3, 5, 8, 13, 21, 34];
var res = bsearch4(a, a.length, 7);
assert.equal(res, 4);

