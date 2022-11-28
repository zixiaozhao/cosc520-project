/*
  This is a Fast Fourier Transform (FFT) implementation of polynomial multiplication. 

  The JavaScript implementation found at GeeksforGeeks was used as a starting 
  point. Some modifications were made as required for the associated project.

  Source: https://www.geeksforgeeks.org/fast-fourier-transformation-poynomial-multiplication/
  Code Author: phasing17
  Copyright: https://www.geeksforgeeks.org/copyright-information/
  Licence: https://creativecommons.org/licenses/by-sa/2.0/
*/
class complex{
    constructor(a, b = 0){
        this.x = a;
        this.y = b;
    }
}
 
function product(a, b){
    let c =new complex(0, 0);
    c.x = a.x * b.x - a.y * b.y
    c.y = a.x * b.y + b.x * a.y
    return c
}
 
function sum(a, b){
    let c = new complex(0, 0);
    c.x = a.x + b.x
    c.y = a.y + b.y
    return c
}
 
function difference(a, b){
    let c =new complex(0, 0);
    c.x = a.x - b.x
    c.y = a.y - b.y
    return c
}
 
