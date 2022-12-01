// functino that helps to find the closest power of 2 that is larger than the index
// this method used some of ideas from this blog, https://www.geeksforgeeks.org/highest-power-2-less-equal-given-number/
export function findSizeof2(index){
  let temp = index -1;
  temp |= temp >> 1;
  temp |= temp >> 2;
  temp |= temp >> 4;
  temp |= temp >> 8;
  temp |= temp >> 16;
  return (temp < 0) ? 1 : temp + 1;
}

//function to reverse the bit of a input, length nedded
export function reverseBits(input, bitsCount) {
  let reversedBits = 0;

  for (let bitIndex = 0; bitIndex < bitsCount; bitIndex += 1) {
    reversedBits *= 2;

    if (Math.floor(input / (1 << bitIndex)) % 2 === 1) {
      reversedBits += 1;
    }
  }

  return reversedBits;
}

//return the length in bit
export function bitLength(number) {
    let bitsCounter = 0;
  
    while ((1 << bitsCounter) <= number) {
      bitsCounter += 1;
    }
    return bitsCounter;
  }
  
  
