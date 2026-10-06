# QA Automation - Playwright & TypeScript

Portfolio project focused on end-to-end test automation using Playwright and TypeScript.

The project automates key user flows of the SauceDemo e-commerce application, including login, product selection, shopping cart and checkout.

## Technologies

- Playwright
- TypeScript
- Node.js
- Git
- GitHub Actions
- Page Object Model (POM)

## Automated Tests

The project currently includes 5 automated tests:

### Login

- Successful login with valid credentials
- Login rejected with invalid credentials

### Products & Cart

- Add a product to the shopping cart

### Checkout

- Complete a purchase successfully
- Checkout rejected when the first name is missing

## Project Structure

```text
qa-automation-playwright/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   └── CheckoutPage.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── products.spec.ts
│   └── checkout.spec.ts
│
├── playwright.config.ts
├── package.json
└── package-lock.json