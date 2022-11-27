import * as naive from "./naive.js";
// import * as fft from "./fft.js";

// Add event listeners.
document
  .getElementById("multiply-btn")
  .addEventListener("click", multiplyPolynomials);
document.getElementById("clear-btn").addEventListener("click", clearResults);

// Event listener functions
function multiplyPolynomials() {
  // Retrieve polynomial coefficients from import form.
  const [polyOne, polyTwo] = transformPolynomialFormInputs();

  // Multiply the polynomials.
  var naiveArr = naive.multiply(polyOne, polyTwo);
  // var fftArr = fft.multiply(polyOne, polyTwo);
  var fftArr = polyTwo;

  // Display the output string in the browser window.
  document.getElementById("naive-output").innerHTML = printPolynomial(naiveArr);
  document.getElementById("fft-output").innerHTML = printPolynomial(fftArr);
}

function clearResults() {
  // Clear the output string in the browser window.
  document.getElementById("naive-output").innerHTML = "-";
  document.getElementById("fft-output").innerHTML = "-";
}

// Helper functions
function transformPolynomialFormInputs() {
  const inputOne = document.getElementsByName("polyOne[]");
  const inputTwo = document.getElementsByName("polyTwo[]");
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
  // polynomial multiplication algorithms, and return.
  return [polyOne.reverse(), polyTwo.reverse()];
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
