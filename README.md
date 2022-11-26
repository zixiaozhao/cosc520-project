# COSC 520 Final Project: Polynomial Multiplication

## Overview

This is our final project for COSC 520, Polynomial Multiplication.
Two polynomial multiplication algorithms have been implemented: a naive algorithm and the FFT algorithm.

### Naive Algorithm

...

### FFT Algorithm

...

## Testing

### Unit Tests on Algorithms

This section describes how to test the JavaScript implementations of the two polynomial multiplication algorithms. The testing is performed with Jest. Both versions of the algorithm are tested by the same test file.

#### Prerequisites

To run the unit tests, you must have [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com).
Then [Jest](https://jestjs.io) and Babel envrionment presets can be installed by executing the following commands:  
`npm install --save-dev jest`  
`npm install --save-dev @babel/preset-env`

#### Running Unit Tests

The commands below are executed in the project directory.

- To run all of the unit tests --> `npm test`
- To run a single unit test --> `npm test -- -t '<test string>'`
- To generate a coverage report --> `npm test -- --coverage`

### Preview Site Development Changes Locally

To preview site development changes locally before deploying through GitHub, follow these instructions:
[Testing your GitHub Pages site locally with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)

The publishing source for this repo is the `main` branch.
