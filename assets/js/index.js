/*
  A JavaScript module to handle passing information between the broswer window
  and the algorithm implementations.
*/
import * as naive from "./naive.js";
import * as fft from "./fft.js";

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

// Event listener functions.
// ----------------------------------------------------------------------------
function multiplyPolynomials() {
  // Retrieve polynomial coefficients from import form.
  const [polyOne, polyTwo] = transformPolynomialFormInputs();

  // Multiply the polynomials.
  var naiveArr = naive.multiply(polyOne, polyTwo);
  var fftArr = fft.multiply(polyOne, polyTwo);

  // Display the output string in the browser window.
  document.getElementById("results-multi-naive").innerHTML =
    printPolynomial(naiveArr);
  document.getElementById("results-multi-fft").innerHTML =
    printPolynomial(fftArr);
}

function runPerformanceTest() {
  // Define the list of input array lengths and the maximum value in each.
  const inputLengths = [500, 1000, 2000, 4000, 8000, 16000, 32000, 64000];
  const maxValue = 100;

  // Generate input arrays of random integers at the defined lengths.
  // The array values will be whole numbers ranging from 0 to maxValue-1.
  var polyOneArrs = [];
  var polyTwoArrs = [];
  for (var i = 0; i < inputLengths.length; i++) {
    polyOneArrs.push(
      Array.from({ length: inputLengths[i] }, () =>
        Math.floor(Math.random() * maxValue)
      )
    );
    polyTwoArrs.push(
      Array.from({ length: inputLengths[i] }, () =>
        Math.floor(Math.random() * maxValue)
      )
    );
  }

  // Run timing tests.
  const iterations = 10;
  var avgTimesNaive = [];
  var avgTimesFFT = [];
  var start = 0;
  var stop = 0;

  for (var i = 0; i < inputLengths.length; i++) {
    console.log("Running test case: " + (i + 1));

    // Test naive algorithm.
    start = performance.now();
    for (var j = 0; j < iterations; j++) {
      console.log("...testing naive algorithm");
      naive.multiply(polyOneArrs[i], polyTwoArrs[i]);
    }
    stop = performance.now();
    avgTimesNaive.push((stop - start) / iterations);

    // Test FFT algorithm.
    start = performance.now();
    for (var j = 0; j < iterations; j++) {
      console.log("...testing fft algorithm");
      fft.multiply(polyOneArrs[i], polyTwoArrs[i]);
    }
    stop = performance.now();
    avgTimesFFT.push((stop - start) / iterations);
  }

  // Calculate and display results in the browser window.
  for (var i = 0; i < inputLengths.length; i++) {
    document.getElementById("results-perf-naive-" + i).innerHTML =
      avgTimesNaive[i].toFixed(3);
    document.getElementById("results-perf-fft-" + i).innerHTML =
      avgTimesFFT[i].toFixed(3);
  }
}

function clearMultiplicationResults() {
  // Clear the multiplication output string in the browser window.
  document.getElementById("results-multi-naive").innerHTML = "-";
  document.getElementById("results-multi-fft").innerHTML = "-";
}

function clearPerformanceResults() {
  // Determine the number of data columns in the table.
  const columns = document.querySelectorAll(
    '[id^="results-perf-naive-"]'
  ).length;

  // Loop through and clear performance table data in the browser window.
  for (var i = 0; i < columns; i++) {
    document.getElementById("results-perf-naive-" + i).innerHTML = "-";
    document.getElementById("results-perf-fft-" + i).innerHTML = "-";
  }
}

// Helper functions
// ----------------------------------------------------------------------------
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

  // Loop through coefficients and generate output string.
  for (var i = 0; i < poly.length; i++) {
    // If the coefficient is missing, set it to zero.
    poly[i] = poly[i] || 0;

    // Skip zero coefficient terms.
    if (poly[i] == 0) continue;

    if (i === 0) {
      // Constant term, no x.
      str = " " + poly[i];
    } else if (i === 1) {
      // x^1 term.
      str = poly[i] + "x +" + str;
    } else {
      // x^2 and higher terms.
      str = poly[i] + "x^" + i + " + " + str;
    }
  }

  if (str === "") {
    str = "0";
  }

  return str;
}
