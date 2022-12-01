import ComplexNumber from "./ComplexNumber.js";
import bitLength from "./bitLength.js";

export function multiply(polyOne, polyTwo){

    var n = polyOne.length > polyTwo.length ? findSizeof2(polyOne.length*2) : findSizeof2(polyTwo.length*2)

    let x = [];
    let y = [];

    for(var i = 0; i < n; i++){
        x.push(polyOne[i] ? new ComplexNumber({re:parseInt(polyOne[i]), im: 0}) : new ComplexNumber({}))
        y.push(polyTwo[i] ? new ComplexNumber({re:parseInt(polyTwo[i]), im: 0}) : new ComplexNumber({}))
    }
    

    let xr = FFT(x)
    let yr = FFT(y)
    var rc = xr.map((v, i) => v.multiply(yr[i]));
    let c = FFT(rc, true)
    let output = c.map(v => Math.round(v.re))

    return output;
}

function findSizeof2(target){
    let temp = target -1;
    temp |= temp >> 1;
    temp |= temp >> 2;
    temp |= temp >> 4;
    temp |= temp >> 8;
    temp |= temp >> 16;
    return (temp < 0) ? 1 : temp + 1;
}

function FFT(inputData, inverse = false) {
    const bitsCount = bitLength(inputData.length - 1);
    const N = 1 << bitsCount;
  
    const output = [];
    for (let dataSampleIndex = 0; dataSampleIndex < N; dataSampleIndex += 1) {
      output[dataSampleIndex] = inputData[reverseBits(dataSampleIndex, bitsCount)];
    }
  
    for (let blockLength = 2; blockLength <= N; blockLength *= 2) {
      const imaginarySign = inverse ? -1 : 1;
      const phaseStep = new ComplexNumber({
        re: Math.cos((2 * Math.PI) / blockLength),
        im: imaginarySign * Math.sin((2 * Math.PI) / blockLength),
      });
      for (let blockStart = 0; blockStart < N; blockStart += blockLength) {
        let phase = new ComplexNumber({ re: 1, im: 0 });
  
        for (let signalId = blockStart; signalId < (blockStart + blockLength / 2); signalId += 1) {
          const component = output[signalId + blockLength / 2].multiply(phase);
  
          const upd1 = output[signalId].add(component);
          const upd2 = output[signalId].subtract(component);
  
          output[signalId] = upd1;
          output[signalId + blockLength / 2] = upd2;
  
          phase = phase.multiply(phaseStep);
        }
      }
    }
  
    if (inverse) {
      for (let signalId = 0; signalId < N; signalId += 1) {
        output[signalId] = output[signalId].divide(N);
      }
    }
  
    return output;
}

  function reverseBits(input, bitsCount) {
    let reversedBits = 0;
  
    for (let bitIndex = 0; bitIndex < bitsCount; bitIndex += 1) {
      reversedBits *= 2;
  
      if (Math.floor(input / (1 << bitIndex)) % 2 === 1) {
        reversedBits += 1;
      }
    }
  
    return reversedBits;
  }
