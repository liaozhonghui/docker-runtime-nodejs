function countYard(M, N, data) {
  let arr = new Array(N).fill(0);
  let yard = new Set();
  for (let i = 0; i < data.length; ++i) {
    let line = data[i];
    for (let j = 0; j < line.length; ++j) {
      let node = line[j];
      if (j == 0) {
        if (node == '*') {
          if (i == 1)
        }
      }

      if (node == *) { };
      if (node == '.') {
        // left, right, top, buttom
        if (left && right && top && buttom)
      }
    }
  }
}

/**
 * test cases
 */
const assert = require('assert');
{
  const data = {
    M: 7,
    N: 4,
    strs: [
      '****',
      '*.**',
      '**.*',
      '*..*',
      '**.*',
      '*.**',
      '****',
    ]
  };
  let count = countYard(data.M, data.N, data.data);
  assert.strictEqual(count, 3);
}

strs: [
  '0000',
  '0100',
  '0020',
  '0320',
  '0020',
  '0100',
  '0000',
];
