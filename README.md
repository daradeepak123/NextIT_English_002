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
