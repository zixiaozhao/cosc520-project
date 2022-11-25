// const naive = require('../assets/js/naive.js');
// const fft = require('../assets/js/fft.js');
// const algos = [naive.multiply, fft.multiply];

// Two dummy functions until algorithms are completed
// Passing example
function dummyOne(a, b) {
  return a * b;
}

// Failing example
function dummyTwo(a, b) {
  return a + b;
}

const algos = [dummyOne, dummyTwo];

// Algorithm number is injected into test case string with %#
test.each(algos)('test example to be deleted | algo: %#', (func) => {
  var expected = 10;
  expect(func(1, 10)).toBe(expected);
});
