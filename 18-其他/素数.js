const process = require('process');

function getSuNumber(n) {
  if (n < 0) return;
  process.stdout.write('1 ');
  if (n == 1) return;

  let count = 1;
  for (let i = 2; i < n; ++i) {
    let isNum = true;
    for (let j = 2; j < i; ++j) {
      if (i % j == 0) {
        isNum = false;
        break;
      }
    }
    if (!isNum) {
      count += 1;
      process.stdout.write(i + ' ');
      if (count % 10 == 0) process.stdout.write('\n');
    }
  }
  if (count % 10 != 0) process.stdout.write('\n');
  return;
}


var a = 100;
getSuNumber(a);
