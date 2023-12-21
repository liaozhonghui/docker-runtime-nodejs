function findFrequentTreeSum(root) {
  if (!root) return [];

  let nodeSums = [];

  function helper(node) {
    if (node == null) {
      return 0;
    }
    let cur = helper(node.left) + helper(node.right) + node.val;
    nodeSums.push(cur);
    return cur;
  }

  helper(root);
}
