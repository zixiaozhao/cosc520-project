/* 
  This is the unit test file for the polynomial multiplication algorithm 
  implementations. Since all algorithms should return the same result, only 
  one test file is used to test all algorithms. Each test case loops through
  the algorithm functions to be tested, which are defined in the algos array.
*/

// Import algorithm functions to be tested.
import * as naive from "../assets/js/naive.js";
import * as fft from "../assets/js/fft.js";

const algos = [naive.multiply, fft.multiply];

// TEST CASES
// The algorithm index is injected into test case string with %#.
test.each(algos)("base test case | algo: %#", (func) => {
  var A = [5, 0, 10, 6];
  var B = [1, 2, 4];
  var expected = [5, 10, 30, 26, 52, 24];
  expect(func(A, B)).toEqual(expected);
});

test.each(algos)("one empty polynomial 1 | algo: %#", (func) => {
  var A = [5, 0, 10, 6];
  var B = [];
  var expected = [0, 0, 0];
  expect(func(A, B)).toEqual(expected);
});

test.each(algos)("one empty polynomial 2 | algo: %#", (func) => {
  var A = [];
  var B = [1, 2, 4];
  var expected = [0, 0];
  expect(func(A, B)).toEqual(expected);
});

test.each(algos)("twp empty polynomials | algo: %#", (func) => {
  var A = [];
  var B = [];
  var expected = [];
  expect(func(A, B)).toEqual(expected);
});

test.each(algos)("one zero polynomial 1| algo: %#", (func) => {
  var A = [5, 0, 10, 6];
  var B = [0, 0, 0];
  var expected = [0, 0, 0, 0, 0, 0];
  expect(func(A, B)).toEqual(expected);
});

test.each(algos)("one zero polynomial 2| algo: %#", (func) => {
  var A = [0, 0, 0, 0];
  var B = [1, 2, 4];
  var expected = [0, 0, 0, 0, 0, 0];
  expect(func(A, B)).toEqual(expected);
});

test.each(algos)("equal length polynomials | algo: %#", (func) => {
  var A = [5, 0, 10, 6];
  var B = [1, 2, 4, 8];
  var expected = [5, 10, 30, 66, 52, 104, 48];
  expect(func(A, B)).toEqual(expected);
});

test.each(algos)("one large polynomial, one small 1 | algo: %#", (func) => {
  var A = [5, 0, 10, 6, 4, 100, 2, 85, 15];
  var B = [1, 2];
  var expected = [5, 10, 10, 26, 16, 108, 202, 89, 185, 30];
  expect(func(A, B)).toEqual(expected);
});

test.each(algos)("one large polynomial, one small 2 | algo: %#", (func) => {
  var A = [1, 2];
  var B = [5, 0, 10, 6, 4, 100, 2, 85, 15];
  var expected = [5, 10, 10, 26, 16, 108, 202, 89, 185, 30];
  expect(func(A, B)).toEqual(expected);
});

test.each(algos)("negative coefficients 1 | algo: %#", (func) => {
  var A = [-5, 0, -10, -6];
  var B = [1, 2, 4];
  var expected = [-5, -10, -30, -26, -52, -24];
  expect(func(A, B)).toEqual(expected);
});

test.each(algos)("negative coefficients 2 | algo: %#", (func) => {
  var A = [5, 0, 10, 6];
  var B = [-1, -2, -4];
  var expected = [-5, -10, -30, -26, -52, -24];
  expect(func(A, B)).toEqual(expected);
});

test.each(algos)("negative coefficients 3 | algo: %#", (func) => {
  var A = [-5, 0, -10, -6];
  var B = [-1, -2, -4];
  var expected = [5, 10, 30, 26, 52, 24];
  expect(func(A, B)).toEqual(expected);
});

test.each(algos)("mixed coefficients | algo: %#", (func) => {
  var A = [-5, 0, -10, 6];
  var B = [1, -2, 4];
  var expected = [-5, 10, -30, 26, -52, 24];
  expect(func(A, B)).toEqual(expected);
});
