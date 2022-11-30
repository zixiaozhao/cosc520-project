export default function bitLength(number) {
    let bitsCounter = 0;
  
    while ((1 << bitsCounter) <= number) {
      bitsCounter += 1;
    }
  
    return bitsCounter;
  }
  
  