/*
  This code implements an iterative Fast Fourier Transform, referring to the 
  following sources:

    1) Iterative Fast Fourier Transformation for polynomial multiplication from 
       GeeksforGeeks. 

       Source: https://www.geeksforgeeks.org/iterative-fast-fourier-transformation-polynomial-multiplication/
       Code Author: Unknown
       Copyright: https://www.geeksforgeeks.org/copyright-information/
       Licence: https://creativecommons.org/licenses/by-sa/2.0/
  
   2) Free small FFT in multiple languages.
      https://www.nayuki.io/page/free-small-fft-in-multiple-languages 
      under the MIT License

      Permission is hereby granted, free of charge, to any person obtaining a copy of
      this software and associated documentation files (the "Software"), to deal in
      the Software without restriction, including without limitation the rights to
      use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
      the Software, and to permit persons to whom the Software is furnished to do so,
      subject to the following conditions:
      - The above copyright notice and this permission notice shall be included in
        all copies or substantial portions of the Software.
      - The Software is provided "as is", without warranty of any kind, express or
        implied, including but not limited to the warranties of merchantability,
        fitness for a particular purpose and noninfringement. In no event shall the
        authors or copyright holders be liable for any claim, damages or other
        liability, whether in an action of contract, tort or otherwise, arising from,
        out of or in connection with the Software or the use or other dealings in the
        Software.

    3) This code is also inspired by:
       https://zhuanlan.zhihu.com/p/197450738
*/
import ComplexNumber from "./ComplexNumber.js";
import { findSizeof2, bitLength, reverseBits } from "./bitOperation.js";

export function multiply(polyOne, polyTwo){
  var outputLength = polyOne.length+polyTwo.length-1;
  
  // Get the length of the longer polynomial.
  var n = polyOne.length > polyTwo.length ? findSizeof2(polyOne.length*2) : findSizeof2(polyTwo.length*2)

  let x = [];
  let y = [];

  // Convert input polynomials to complex form.
  for(var i = 0; i < n; i++){
      x.push(polyOne[i] ? new ComplexNumber({re:parseInt(polyOne[i]), im: 0}) : new ComplexNumber({}))
      y.push(polyTwo[i] ? new ComplexNumber({re:parseInt(polyTwo[i]), im: 0}) : new ComplexNumber({}))
  }
  
  // Cacluate the FFT of the polynomials.
  let xr = FFT(x)
  let yr = FFT(y)

  // Multiply the point-value representations of the polynomials.
  var rc = xr.map((v, i) => v.multiply(yr[i]));

  // Perform interpolation to convert the result to coefficient form.
  let c = FFT(rc, true)

  // Trim the array length and return.
  return c.map(v => Math.round(v.re)).slice(0,outputLength);
}

// Iterative FFT implementation.
function FFT(inputData, inverse = false) {

  // Get bit information about the array.
  const Count = bitLength(inputData.length - 1);
  const N = 1 << Count;

  // Bit reverse for the given array.
  const output = [];//output array
  for (let dataSampleIndex = 0; dataSampleIndex < N; dataSampleIndex += 1) {
    output[dataSampleIndex] = inputData[reverseBits(dataSampleIndex, Count)];
  }

  // Set up for loop for each state of the FFT (butterfly operation).
  for (let blockLength = 2; blockLength <= N; blockLength *= 2) {
    // Calculate the Wm for this phase.
    const imaginarySign = inverse ? -1 : 1;
    const phaseStep = new ComplexNumber({
      re: Math.cos((2 * Math.PI) / blockLength),
      im: imaginarySign * Math.sin((2 * Math.PI) / blockLength),
    });
    // Pair complex number to work with.
    for (let blockStart = 0; blockStart < N; blockStart += blockLength) {
      let phase = new ComplexNumber({ re: 1, im: 0 });
      
      // Perform butterfly operation on each pair.
      for (let id = blockStart; id < (blockStart + blockLength / 2); id += 1) {
        const component = output[id + blockLength / 2].multiply(phase);

        const upd1 = output[id].add(component);
        const upd2 = output[id].subtract(component);

        output[id] = upd1;
        output[id + blockLength / 2] = upd2;

        phase = phase.multiply(phaseStep);
      }
    }
  }

  // If performing interpolation.
  if (inverse) {
    for (let signalId = 0; signalId < N; signalId += 1) {
      output[signalId] = output[signalId].divide(new ComplexNumber({ re: N, im: 0 }));
    }
  }
  
  return output;
}
