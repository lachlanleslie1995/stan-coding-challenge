# Stan coding challenge

My submission for the simple react app coding challenge.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Also includes instructions on how to build the product for production.

### Prerequisites

What things you need to install the software and how to install them

```
Node.js
npm (comes with node)
git
```

### Installing

A series of steps that tell you how to get a development env running

```
1. Open a command shell and navigate to the location you with you clone the repo to
2. Run: git clone https://github.com/lachlanleslie1995/stan-challenge
3. Run: npm install
4. Run: npm run dev
5. Open browser of your choice to "http://localhost:1234/"
```

## Running the tests

To run the unit tests

```
1. Open a command shell and navigate to the repository location
2. Run: npm run test
3. or alternatively to run tests in watch mode: npm run test:watch
```

## Building for production

To build the project for production

```
1. Open a command shell and navigate to the repository location
2. Run: npm run build
```

## Challenge questions

### How did you decide on the technical and architectural choices used as part of your solution?

    * I chose to approach this app in a TDD (Test Driven Development) way as I believe it helps create tidier code with fewer dependencies and less bugs.
    * As it is a small and simple application I chose to use [parcel-bundler](https://github.com/parcel-bundler/parcel) for building/deployment due to its speed and ease of configuration.
    * Used a combination of [React-testing-library](https://github.com/testing-library/react-testing-library), [React-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library) and [Jest](https://jestjs.io/) because they're simple to use and easy to read if you're not familiar with it/the person who wrote the. Also jests error messages are really good.
    * I tried to structure the project in such a way that each componet was as generic as possible while still being loosely coupled.
    * I chose to use [reach-router](https://github.com/reach/router) over react-router as it has more features catered to accessibility while still being a small and simple router.
    * I chose to use [Axios](https://github.com/axios/axios) - The web framework used for the request library as it's easier to mock out for testing with jest.
    * Chose not to lazy load as this is a simple small app.

### Are there any improvements you could make to your submission?

    * Better testing (Reasoning below).
    * Better css styling, probably could've approached my styling to make it more concise and less cluttered.
    * Should've tested more from the perspective of a user instead of that of a developer.
    * Code coverage would be a nice addition.

### What would you do differently if you were allocated more time?

    * Better testing, I don't think I've testing everything I should but I need more experience in testing react application to be able to achieve this in the alloted time.
    * Different types of testing, I limited myself to just some basic unit testing for this submissiong but I would've loved to have done some End to end testing with Cypress.
    * Maybe with more experience/knowledge of how to design/structure a react application I would've chosen to structure my application differently.
