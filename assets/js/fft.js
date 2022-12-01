import ComplexNumber from "./ComplexNumber.js";
import findSizeof2 from "./bitOperation.js";
import reverseBits from "./bitOperation.js";
import bitLength from "./bitOperation.js";

export function multiply(polyOne, polyTwo){
  //get the length that is needed
  var n = polyOne.length > polyTwo.length ? findSizeof2(polyOne.length*2) : findSizeof2(polyTwo.length*2)

  let x = [];
  let y = [];

  //get x and y in complex form
  for(var i = 0; i < n; i++){
      x.push(polyOne[i] ? new ComplexNumber({re:parseInt(polyOne[i]), im: 0}) : new ComplexNumber({}))
      y.push(polyTwo[i] ? new ComplexNumber({re:parseInt(polyTwo[i]), im: 0}) : new ComplexNumber({}))
  }
  
  //porform FFT on x and y
  let xr = FFT(x)
  let yr = FFT(y)

  //find the value of the index for the result before IFFT
  var rc = xr.map((v, i) => v.multiply(yr[i]));

  //find the value of the index for the result
  let c = FFT(rc, true)


  return c.map(v => Math.round(v.re)).slice(0,polyTwo.length+polyTwo.length-1);
}

//Iterative FFT to culculate the DFT of given coefficient of a array
function FFT(inputData, inverse = false) {

  //get bit information about the array
  const Count = bitLength(inputData.length - 1);
  const N = 1 << Count;

  //bit reverse for the given array
  const output = [];//output array
  for (let dataSampleIndex = 0; dataSampleIndex < N; dataSampleIndex += 1) {
    output[dataSampleIndex] = inputData[reverseBits(dataSampleIndex, Count)];
  }

  //set up for loop for each state of the FFT(butterfly operation)
  for (let blockLength = 2; blockLength <= N; blockLength *= 2) {
    //culcilate the Wm for this phase
    const imaginarySign = inverse ? -1 : 1;
    const phaseStep = new ComplexNumber({
      re: Math.cos((2 * Math.PI) / blockLength),
      im: imaginarySign * Math.sin((2 * Math.PI) / blockLength),
    });
    //pair complex number to work with
    for (let blockStart = 0; blockStart < N; blockStart += blockLength) {
      let phase = new ComplexNumber({ re: 1, im: 0 });
      
      //perform butterfly operation on each pair
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
   //if performing IFFT
  if (inverse) {
    for (let signalId = 0; signalId < N; signalId += 1) {
      output[signalId] = output[signalId].divide(new ComplexNumber({ re: N, im: 0 }));
    }
  }
  return output;
}
