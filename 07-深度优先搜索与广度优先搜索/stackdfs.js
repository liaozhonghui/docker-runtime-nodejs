const { deepStrictEqual } = require('assert');

/**
 * 迭代法深度优先遍历：相当于树的先序遍历
 */
const stackDfs = function (root) {
  let stack = [root];
  let visit = [];
  while (stack.length) {
    let node = stack.pop();
    let nodes = [];
    visit.push(node.val);
    if (node.right) nodes.push(node.right);
    if (node.left) nodes.push(node.left);
    for (let n of nodes) stack.push(n);
  }
  return visit;
};

/**
 * test cases.
 */
var tcase = {
  val: 1,
  left: {
    val: 2,
    left: { val: 3 },
    right: { val: 4 },
  },
  right: {
    val: 5,
    left: { val: 6 },
    right: { val: 7 },
  },
};

const visit = stackDfs(tcase);
deepStrictEqual(visit, [1, 2, 3, 4, 5, 6, 7]);
