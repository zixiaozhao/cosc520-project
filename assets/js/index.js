import * as naive from "./naive.js";
// import * as fft from "./fft.js";

// Add event listeners.
document
  .getElementById("btn-multi")
  .addEventListener("click", multiplyPolynomials);
document
  .getElementById("btn-perf")
  .addEventListener("click", runPerformanceTest);
document
  .getElementById("btn-clr-multi")
  .addEventListener("click", clearMultiplicationResults);
document
  .getElementById("btn-clr-perf")
  .addEventListener("click", clearPerformanceResults);

// Event listener functions
function multiplyPolynomials() {
  // Retrieve polynomial coefficients from import form.
  const [polyOne, polyTwo] = transformPolynomialFormInputs();

  // Multiply the polynomials.
  var naiveArr = naive.multiply(polyOne, polyTwo);
  // var fftArr = fft.multiply(polyOne, polyTwo);
  var fftArr = polyTwo;

  // Display the output string in the browser window.
  document.getElementById("results-multi-naive").innerHTML =
    printPolynomial(naiveArr);
  document.getElementById("results-multi-fft").innerHTML =
    printPolynomial(fftArr);
}

function runPerformanceTest() {
  // Retrieve polynomial coefficients from import form.
  const [polyOne, polyTwo] = transformPolynomialFormInputs();

  // Run timing tests.
  const iterations = 10000;

  // Naive algorithm.
  const t0 = performance.now();
  for (var i = 0; i < iterations; i++) {
    naive.multiply(polyOne, polyTwo);
  }
  const t1 = performance.now();

  // FFT algorithm.
  // const t2 = performance.now();
  // for (var i = 0; i < iterations; i++) {
  //   fft.multiply(polyOne, polyTwo);
  // }
  // const t3 = performance.now();

  // Calculate and display results in the browser window.
  document.getElementById("results-perf-naive").innerHTML =
    (t1 - t0).toFixed(2) + " ms";
  // document.getElementById("results-perf-fft").innerHTML =
  //   (t3 - t2).toFixed(2) + " ms";
}

function clearMultiplicationResults() {
  // Clear the output string in the browser window.
  document.getElementById("results-multi-naive").innerHTML = "-";
  document.getElementById("results-multi-fft").innerHTML = "-";
}

function clearPerformanceResults() {
  // Clear the output string in the browser window.
  document.getElementById("results-perf-naive").innerHTML = "-";
  document.getElementById("results-perf-fft").innerHTML = "-";
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
