# Playwright Tests

## Setup

Install Node.js 20 or later, then install the project dependencies and Playwright browsers:

```powershell
npm ci
npm run install:browsers
```

## Run

```powershell
npm test
npm run test:headed
npm run typecheck
```

`npm test` runs the tests in Chromium, Firefox, and WebKit. To run a single browser,
use `npx playwright test --project=chromium` (or `firefox` or `webkit`).

## OrangeHRM example

The OrangeHRM suite has separate page-object files in `src/pages/`, each with
class-level locator declarations, a constructor that receives the Playwright
`Page`, and that page's navigation/assertion methods. The suite has a test for
the login page and each of the 12 sidebar modules. Demo URL, credentials, and
module routes are in `testdata/orangehrm.json`. Maintenance is checked only up
to its Administrator Access prompt, which the test cancels without performing
a protected action. The module tests run serially to avoid concurrent sessions
on the public demo account.

## OrangeHRM BDD suite

Gherkin features for the OrangeHRM login and 12 sidebar modules are in
`features_BDD/`, with shared step definitions in
`features_BDD/step-definitions/`. Generate and run the BDD scenarios with:

```powershell
npm run bdd:generate
npm run bdd:test
```

To run the BDD suite in a headed browser:

```powershell
npm run bdd:headed
```
