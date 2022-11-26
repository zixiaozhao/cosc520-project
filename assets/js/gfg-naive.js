// This is the GeekforGeeks implmentation, with slight modifications.
// Using it temporarily for testing purposes.

// Simple JavaScript program to multiply two polynomials

// A[] represents coefficients of first polynomial
// B[] represents coefficients of second polynomial
export function multiply(A, B) {
  var m = A.length;
  var n = B.length;
  var prod = [];

  for (var i = 0; i < m + n - 1; i++) prod[i] = 0;

  // Multiply two polynomials term by term
  // Take ever term of first polynomial
  for (var i = 0; i < m; i++) {
    // Multiply the current term of first
    // polynomial with every term of
    // second polynomial.
    for (var j = 0; j < n; j++) prod[i + j] += A[i] * B[j];
  }

  return prod;
}
