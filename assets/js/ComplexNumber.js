/*This work reuse some of the code and ideas from this github repo, https://github.com/infusion/Complex.js/blob/master/complex.js 
* the repo is under the MIT licenses
* @license Complex.js v2.1.1 12/05/2020
*
* Copyright (c) 2020, Robert Eisele (robert@xarg.org)
* Dual licensed under the MIT or GPL Version 2 licenses.
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
* - The above copyright notice and this permission notice shall be included in
*   all copies or substantial portions of the Software.
* - The Software is provided "as is", without warranty of any kind, express or
*   implied, including but not limited to the warranties of merchantability,
*   fitness for a particular purpose and noninfringement. In no event shall the
*   authors or copyright holders be liable for any claim, damages or other
*   liability, whether in an action of contract, tort or otherwise, arising from,
*   out of or in connection with the Software or the use or other dealings in the
*   Software.
 * 
 */


export default class ComplexNumber {
  constructor ({ re = 0, im = 0 } = {}) {
    this.re = re;
    this.im = im;
  }

  add = (a) => new ComplexNumber({re: this.re + a.re, im: this.im + a.im})
  subtract = (a) => new ComplexNumber({re: this.re - a.re, im: this.im - a.im});
  multiply = (a) => new ComplexNumber({re: this.re * a.re - this.im * a.im,im: this.re * a.im + this.im * a.re})
  conjugate = (a) => new ComplexNumber({re: a.re, im: -1 * a.im,});

  divide(x) {
    var a = this.re;
    var b = this.im;
    var c = x.re;
    var d = x.im;
    return new ComplexNumber({
      re: (a * c + b * d) / (c * c + d * d),
      im:  (b * c - a * d) / (c * c + d * d),
    });
  }
}
