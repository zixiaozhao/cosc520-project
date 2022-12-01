// Function that helps to find the closest power of 2 that is larger than the 
// index.
//
// The JavaScript implementation found at GeeksforGeeks was used as a starting 
// point for this method:
//
// Source: https://www.geeksforgeeks.org/highest-power-2-less-equal-given-number/
// Code Author: rag2127
// Copyright: https://www.geeksforgeeks.org/copyright-information/
// Licence: https://creativecommons.org/licenses/by-sa/2.0/
export function findSizeof2(index){
  let temp = index -1;
  temp |= temp >> 1;
  temp |= temp >> 2;
  temp |= temp >> 4;
  temp |= temp >> 8;
  temp |= temp >> 16;
  return (temp < 0) ? 1 : temp + 1;
}

// Function to reverse the bit of an input, length needed.
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

// Function to return the length in bits
export function bitLength(number) {
    let bitsCounter = 0;
  
    while ((1 << bitsCounter) <= number) {
      bitsCounter += 1;
    }

    return bitsCounter;
  }
