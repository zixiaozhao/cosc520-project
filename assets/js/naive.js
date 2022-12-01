/*
  This is a naive implementation of polynomial multiplication. In other words,
  it is a brute force algorithm.

  The JavaScript implementation found at GeeksforGeeks was used as a starting 
  point. Some modifications were made as required for the associated project.

  Source: https://www.geeksforgeeks.org/multiply-two-polynomials-2/
  Code Author: Unknown
  Copyright: https://www.geeksforgeeks.org/copyright-information/
  Licence: https://creativecommons.org/licenses/by-sa/2.0/
*/

// A brute force function to multiply the coefficients of two polynomials.
//  [Inputs]  polyOne - an array of coefficients for the first polynomial.
//            polyTwo - an array of coefficients for the second polynomial.
//  [Output]  prod - an array of coefficients for the product polynomial.
//
//  The index of the above arrays corresponds to the power of x for that
//  coefficient, e.g. [ x^0, x^1, ..., x^n ].
export function multiply(polyOne, polyTwo) {
  var m = polyOne.length;
  var n = polyTwo.length;
  var prod = [];

  // Set the product array to all zeros.
  // The size of the product array equals the largest power of x + 1 (constant
  // term) in the result, which is the sum of the largest power of x in both 
  // polynomials + 1 (constant term) and is equivalent to the sum of the sizes 
  // of the inputs - 1, m + n - 1.
  for (var i = 0; i < m + n - 1; i++) prod[i] = 0;

  // Loop through the two arrays and multiply the values at each index.
  // When multiplying powers of x, the resulting power is the sum of the two
  // powers, hence the corresponding index in the returned array is i + j.
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) prod[i + j] += polyOne[i] * polyTwo[j];
  }

  return prod;
}
