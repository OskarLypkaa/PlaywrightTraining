# Veeam UI Automation Test (Playwright)

This repository contains a single UI end-to-end test written in TypeScript using Playwright. :rocket:

## About

This project was created as part of the Veeam SDET recruitment process.  
**Only one test is included, as required by the assignment.**

The implemented scenario covers:
- Navigating from the main Veeam site to the R&D Forums (Support → R&D Forums)
- Attempting user registration with a public email domain
- Verifying that the expected error message appears

---

The test uses the Page Object Model pattern and Playwright fixtures for maintainability.  
Additionally, I've added a `baseTest.ts` file which acts as an abstraction layer between the business logic (page objects) and the actual test cases, similar to a facade pattern.


