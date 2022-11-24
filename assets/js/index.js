// TODO: Import naive.js and fft.js
// TODO: Validate user inputs

function printPolynomial(poly) {
  var str = "";

  for (var i = 0; i < poly.length; i++) {
    poly[i] = poly[i] || 0;

    if (i === 0) {
      str =  " " + poly[i];
    } else if (i === 1) {
      str = poly[i] + "x +" + str;
    } else {
      str = poly[i] + "x^" + i + " + " + str;
    }
  }

  return str;
}

function multiplyPolynomials() {
  var inputOne = document.getElementsByName('polyOne[]');
  var inputTwo = document.getElementsByName('polyTwo[]');
  var polyOne = [];
  var polyTwo = [];
  
  for (var i = 0; i < inputOne.length; i++) {
    polyOne.push(inputOne[i].value);
  }

  for (var i = 0; i < inputTwo.length; i++) {
    polyTwo.push(inputTwo[i].value);
  }

  polyOne.reverse();
  polyTwo.reverse();

  // TODO: Call naive and FFT algorithms
  // naive = multiplyPolynomialsNaive();
  // fft = multiplyPolynomialsFFT();
  var naive = polyOne;
  var fft = polyTwo;

  var naiveOut = printPolynomial(naive);
  var fftOut = printPolynomial(fft);

  document.getElementById("naive-output").innerHTML = naiveOut;
  document.getElementById("fft-output").innerHTML = fftOut;
}
