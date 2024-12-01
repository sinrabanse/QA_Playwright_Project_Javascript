# Playwright Test Suite for Web Application

This repository contains automated tests written in JavaScript using [Playwright](https://playwright.dev/). The tests validate key functionalities of a web application, including user login, error handling, and product purchase flows.

## Test Descriptions

### 1. **ValidateUsersLogin.spec.js**
- Verifies successful login for a list of valid users.
- Ensures each valid user can navigate to the products page.

### 2. **ValidateLockedUserError.spec.js**
- Tests login for invalid or locked-out users.
- Ensures appropriate error messages are displayed.

### 3. **ValidateUsersLoginNegative.spec.js**
- Handles edge cases with invalid login credentials.
- Verifies error messages for missing or incorrect username/password combinations.

### 4. **sanityTests.spec.js**
- Conducts a sanity test for purchasing two products.
- Covers the full flow: login, adding products to the cart, checkout, and verifying a successful purchase.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher).
- Install Playwright:
  ```bash
  npm install playwright

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sinrabanse/QA_Playwright_Project_Javascript.git
   cd QA_Playwright_Project_Javascript

## Running Tests

1. Run all tests:
   ```bash
   npx playwright test

2. Run a specific test file:
   ```bash
   npx playwright test tests/ValidateUsersLogin.spec.js

3. Generate a report:
   ```bash
   npx playwright show-report

## Project Structure

- **tests/**: Contains all test files.
- **utils/**: Utility files for data, locators, and configurations.

## Technologies Used

- **Playwright**: Browser automation framework.
- **JavaScript**: Language for test scripts.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
