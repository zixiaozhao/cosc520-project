# COSC 520 Final Project: Polynomial Multiplication

## Overview

This is our final project for COSC 520, Polynomial Multiplication.
Two polynomial multiplication algorithms have been implemented: a naive algorithm and the FFT algorithm.

### Naive Algorithm

The naive algorithm is a brute force approach to polynomial multiplication. It loops through two arrays representing the coefficients of each polynomial and multiplies them together.

For more information, see the [Multiply two polynomials](https://www.geeksforgeeks.org/multiply-two-polynomials-2/) post at GeeksforGeeks.

### Fast Fourier Transform (FFT) Algorithm

The FFT algorithm is a more efficient approach to polynomial multiplication. It relies on converting the polynomials from a coefficient representation to a point-value representation, performing the multiplication, then converting back to a coefficient representation by taking the discrete Fourier transform and inverse discrete Fourier transform, respectively, and implementing a divide and conquer strategy.

For more information, see the [Fast Fourier Transformation for polynomial multiplication](https://www.geeksforgeeks.org/fast-fourier-transformation-poynomial-multiplication/) post at GeeksforGeeks.

## Demonstration

A browser based demonstration where users can enter polynomial coefficients (up to x^4) and see the result of the multiplication was created. This demonstration can be accessed by navigating to: [https://zixiaozhao.github.io/cosc520-project/](https://zixiaozhao.github.io/cosc520-project/)

## Testing

### Unit Tests on Algorithms

This section describes how to test the JavaScript implementations of the two polynomial multiplication algorithms. The testing is performed with Jest. Both versions of the algorithm are tested by the same test file.

#### Prerequisites

To run the unit tests, you must have [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com).
Then [Jest](https://jestjs.io) and Babel environment presets can be installed by executing the following commands:  
`npm install --save-dev jest`  
`npm install --save-dev @babel/preset-env`

#### Running Unit Tests

The commands below are executed in the project directory.

- To run all of the unit tests --> `npm test`
- To run a single unit test --> `npm test -- -t '<test string>'`
- To generate a coverage report --> `npm test -- --coverage`

#### Coverage Report

If the coverage flag is used when running the unit tests, a coverage report is generated.

A folder named `coverage` is created in the root of the project directory.
Navigate to the `index.html` file found under the `Icov-report` folder and open it in your favourite web browser to see the results.

```
|- coverage/
  |- Icov-report/
    |- index.html
```

### Preview Site Development Changes Locally

To preview site development changes locally before deploying through GitHub, follow these instructions:
[Testing your GitHub Pages site locally with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)

The publishing source for this repo is the `main` branch.

## Licence

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
