# Basic Pocket Calculator

A very basic pocket calculator implementation, which is implemented against the following libraries / tech stack:

- ReactJS `^17.0.2`
- TypeScript `^4.5.5`
- SASS `^1.49.7`
- React Testing Library `^12.1.2`

The environment with which this project was implemented on:

- Node `16.13.2`
- NPM `8.1.2`
- and initially scaffolded from create-react-app `5.0.0`

## Running the Project
---
To run the project locally, run

```bash
  npm start
```

## Running the Unit Tests
---
To run unit tests on this project, run

```bash
  npm test
```

## Running the E2E Tests (Cypress)
---
⚠️ As a pre-requisite, the main project application must already be running, before attempting to run the E2E tests.

To run the E2E tests interacively, run

```bash
`npm run e2e` - run the e2e tests interactively
```

To run the E2E tests headlessly, run

```bash
`npm run e2e:headless` - run the e2e tests headlessly
```

## Browsers
---
The following browsers were successfully tested on:

- Chrome `98.0.4758.102`
- Firefox `96.0.2`
- Safari `15.2`
## Demo
---
Here is a GIF demonstrating of what to expect when you run the project, and a glimpse of the interactions with the web-based pocket calculator.

![GIF: Basic Pocket Calculator](https://user-images.githubusercontent.com/7581546/153953703-643e4513-ea07-4972-bab0-405a05c53cca.gif)

## Future Additions For Consideration
---
- Implement [Redux](https://redux.js.org/) to centrally and globally manage the basic state
- Implement the new Cypress feature; **Component Testing**. Further [reading](https://www.cypress.io/blog/2022/06/01/cypress-10-release/), or watch the [video](https://go.cypress.io/component-testing-recording) demonstration (~1 hour).