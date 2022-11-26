import * as naive from "./gfg-naive.js";
// import * as fft from "./fft.js";

// Add event listener for the multiply button
document
  .getElementById("multiply-btn")
  .addEventListener("click", multiplyPolynomials);

function multiplyPolynomials() {
  var inputOne = document.getElementsByName("polyOne[]");
  var inputTwo = document.getElementsByName("polyTwo[]");
  var polyOne = [];
  var polyTwo = [];

  // Add the polynomial coefficients to an array.
  for (var i = 0; i < inputOne.length; i++) {
    polyOne.push(inputOne[i].value);
  }

  for (var i = 0; i < inputTwo.length; i++) {
    polyTwo.push(inputTwo[i].value);
  }

  // Reverse coefficient order so that it matches the expected inputs for the
  // polynomial multiplication algorithms.
  polyOne.reverse();
  polyTwo.reverse();

  // Multiply the polynomials.
  var naiveArr = naive.multiply(polyOne, polyTwo);
  // var fftArr = fft.multiply(polyOne, polyTwo);
  var fftArr = polyTwo;

  // Convert results from a coefficient array to an output string.
  var naiveStr = printPolynomial(naiveArr);
  var fftStr = printPolynomial(fftArr);

  // Display the output string in the browser window.
  document.getElementById("naive-output").innerHTML = naiveStr;
  document.getElementById("fft-output").innerHTML = fftStr;
}

function printPolynomial(poly) {
  var str = "";

  for (var i = 0; i < poly.length; i++) {
    poly[i] = poly[i] || 0;

    if (i === 0) {
      str = " " + poly[i];
    } else if (i === 1) {
      str = poly[i] + "x +" + str;
    } else {
      str = poly[i] + "x^" + i + " + " + str;
    }
  }

  return str;
}
