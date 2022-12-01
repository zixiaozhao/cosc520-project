export default class ComplexNumber {
  constructor({ re = 0, im = 0 } = {}) {
    this.re = re;
    this.im = im;
  }

  add(a) {

    return new ComplexNumber({
      re: this.re + a.re,
      im: this.im + a.im,
    });
  }

  subtract(a) {

    return new ComplexNumber({
      re: this.re - a.re,
      im: this.im - a.im,
    });
  }

  multiply(a) {

    return new ComplexNumber({
      re: this.re * a.re - this.im * a.im,
      im: this.re * a.im + this.im * a.re,
    });
  }

  divide(a) {

    // Get divider conjugate.
    const dividerConjugate = this.conjugate(a);

    // Multiply dividend by divider's conjugate.
    const finalDivident = this.multiply(a);

    // Calculating final divider using formula (a + bi)(a − bi) = a^2 + b^2
    const finalDivider = (a.re ** 2) + (a.im ** 2);
    return new ComplexNumber({
      re: finalDivident.re / finalDivider,
      im: finalDivident.im / finalDivider,
    });
  }

  conjugate(a) {

    return new ComplexNumber({
      re: a.re,
      im: -1 * a.im,
    });
  }


}
