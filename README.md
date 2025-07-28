# Playwright Tests: Sharding & Allure Reporting

*The project acts as a playground for exploring how Playwright can be configured for efficient parallelism 
and how Allure reporting can be integrated and customized for richer feedback.*

## Overview

This repository demonstrates end-to-end (E2E) automated testing with **Playwright** focusing on:

- **Evaluating test sharding strategies** to optimize parallel execution and reduce total test runtime.
- **Enhancing test reporting** using **Allure**, providing clearer, more actionable reports for debugging and quality assessment.
- **Creating simple page to keep links for last reports** as an extra besides Allure history and retries
- **Running tests against an application from another [repository](https://github.com/gomczak/test-app)** 
- **Publishing test reports on GitHub Pages**, enabling easy, web-accessible sharing of results with the team or stakeholders directly from CI.

## Features

- Sample E2E tests with Playwright
- Example configurations for test sharding/parallel runs
- Allure reporting integration
- Publishing merged Allure reports after CI runs on GH Pages
- Simple HTML page for summary of last reports

## Getting Started

### Prerequisites

- Node.js (recommended: use nvm to manage versions)
- pnpm (preferred; npm/yarn as alternatives)

### Setup Instructions

Clone the repository:
```bash
git clone https://github.com/gomczak/playwright-tests.git
cd playwright-tests
```

Install dependencies:
```bash
pnpm install
```
(You may use `npm install` or `yarn install` as alternatives.)

### Running Tests

Run all tests in interactive (headed) mode:
```bash
pnpm exec playwright test --ui
```

Run all tests in headless mode (with sharding, if configured):
```bash
pnpm exec playwright test
```

Generate Allure report after tests:
```bash
pnpm exec allure generate ./allure-results --clean -o ./allure-report
pnpm exec allure open ./allure-report
```

### Notes on Sharding & Reporting

- [Sharding](https://playwright.dev/docs/test-sharding)
- [Allure improving readability](https://allurereport.org/docs/gettingstarted-readability/#improving-readability-of-your-test-reports)
- [Allure history and retries](https://allurereport.org/docs/history-and-retries/#history-and-retries)

## Continuous Integration

All workflow runs and their details [here](https://github.com/gomczak/playwright-tests/actions).

The last published test report with history is available on [GitHub Pages](https://gomczak.github.io/playwright-tests/).